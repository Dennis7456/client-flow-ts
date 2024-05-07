import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { throwError, catchError } from 'rxjs';
import { BASE_URL } from '../services/constants';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent implements OnInit {
  contactForm!: FormGroup;
  loading: boolean = false;
  error: string | null = null;

  constructor(
    private formBuilder: FormBuilder, 
    private http: HttpClient,
    private authService: AuthService,
    private router: Router,
    private _snackBar: MatSnackBar,
    ) { }


  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
  
  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  logout() {
    if (this.authService.isLoggedIn()) {
      this.authService.logout();
      this._snackBar.open('Logged out successfully!', 'close', {
      duration: 5000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
      panelClass: ['snackbar-success']
    });
      this.router.navigate(['/login']);

    }
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      return;
    }

    this.loading = true;
    const token = this.authService.getToken();
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    console.log(headers);
    this.http.post(`${BASE_URL}/api/contact-us`, this.contactForm.value, { headers })
    .pipe(
      catchError((error: HttpErrorResponse) => {
        this.error = 'Error occurred while submitting the form.';
        this._snackBar.open('There was an error submitting you request.', 'close', {
      duration: 5000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
      panelClass: ['snackbar-danger']
    });
        return throwError(error);
      }))
    .subscribe(response => {
      console.log(response)
      this._snackBar.open('Form submitted successfully!', 'close', {
      duration: 5000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
      panelClass: ['snackbar-success']
    });

    this.contactForm.reset();
    this.loading = false;
    })
    
  }

  getFormControl(controlName: string): FormControl {
  const control = this.contactForm.get(controlName);
  if (!(control instanceof FormControl)) {
    throw new Error('Expected FormControl but received an AbstractControl.');
  }
  return control;
}
}