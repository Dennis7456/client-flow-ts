import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, FormBuilder, Validators} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit{
  loginForm!: FormGroup;
  loading = false;
  submitted = false; 

  getFormControl(name: string): FormControl {
    return this.loginForm.get(name) as FormControl;
  }
  
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) {
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
        // Save token to local storage
        this.authService.saveToken(response.access_token);

        // Redirect the user to the dashboard page
        this.router.navigate(['/dashboard']);
      },
      (error: HttpErrorResponse) => {
        console.log(error);

        this.loading = false;
      });
  }
}
