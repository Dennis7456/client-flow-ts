import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  loading = false;
  submitted = false;
  error = '';


  getFormControl(name: string): FormControl {
    return this.registerForm.get(name) as FormControl;
  }

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {

  }

  isLoggedIn() {
    // console.log(this.authService.isLoggedIn())
    return this.authService.isLoggedIn();
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      user_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      password_confirmation: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(FormGroup: FormGroup) {
    const passwordControl = FormGroup.get('password');
    const confirmPasswordControl = FormGroup.get('password_confirmation');

    if (!passwordControl || !confirmPasswordControl) {
      return null;
    }

    if (passwordControl.value !== confirmPasswordControl.value) {
      confirmPasswordControl.setErrors({ passwordMismatch: true });
    } else {
      confirmPasswordControl.setErrors(null);

    }
    return null;
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // check for validation errors
    if (this.registerForm.invalid) {
      return;
    }

    // console.log(this.registerForm.value)

    this.loading = true;
    this.authService.register(this.registerForm.value)
      .subscribe(
        (response: any) => {
          if (response.access_token) {
            this.authService.saveToken(response.access_token);
            this.router.navigate(['/dashboard']);
            this._snackBar.open('Registered successfully', 'Close', {
              duration: 5000,
              verticalPosition: 'top',
              horizontalPosition: 'end',
              panelClass: ['snackbar-success']
            });
          } else {
            this._snackBar.open(response.message || 'Unknown error occurred', 'Close', {
              duration: 5000,
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
          this.loading = false
        });
  }

}
