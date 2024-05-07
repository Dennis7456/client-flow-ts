import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, FormBuilder, Validators} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  error = '';

  getFormControl(name: string): FormControl {
    return this.loginForm.get(name) as FormControl;
  }
  
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private _snackBar: MatSnackBar
    ) {
  }

  isLoggedIn() {
    console.log(this.authService.isLoggedIn())
    return this.authService.isLoggedIn();
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit(){
    this.submitted = true;

    //check for error
    if(this.loginForm.invalid){
      return;
    }

    this.loading = true;
    this.authService.login(this.loginForm.value)
    .subscribe(
      (response: any) => {
        if (response.access_token) {
            this.authService.saveToken(response.access_token);
            this.router.navigate(['/dashboard']);
            this._snackBar.open('Login successful!', 'Close', {
              duration: 15000,
              verticalPosition: 'top',
              horizontalPosition: 'end',
              panelClass: ['snackbar-success']
            });
          } else {
            this._snackBar.open(response.message || 'Unknown error occurred', 'Close', {
              duration: 15000,
              verticalPosition: 'top',
              horizontalPosition: 'end',
              panelClass: ['snackbar-danger']
            });
            this.loading = false;
          }
      },
      (error: HttpErrorResponse) => {
        console.log(error);
        this.error = error.message;
        this.loading = false;
      });
  }
}
