import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { throwError } from 'rxjs';
import { FirebaseError } from 'firebase/app';

import { AuthService } from '@services/auth/auth.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  errorMessage!: string | null;

  loginForm = this.fb.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  get controlEmail() {
    return this.loginForm.get('email');
  }

  get controlPassword() {
    return this.loginForm.get('password');
  }

  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService) {}

  register() {
    this.router.navigate(['/register']);
  }

  onLoginFormSubmit() {
    this.authService
      .login(this.loginForm.value)
      .then(() => this.router.navigate(['/home']))
      .catch(error => this.handleError(error));

    this.loginForm.reset();
  }

  private handleError(errorRes: FirebaseError) {
    if (!errorRes.code || !errorRes.code) {
      return throwError((this.errorMessage = 'An unknown error occurred!'));
    }
    switch (errorRes.code) {
      case 'auth/wrong-password':
        this.errorMessage = 'This password is not correct';
        break;
      case 'auth/user-not-found':
        this.errorMessage = 'This email does not exist';
        break;
      default:
        this.errorMessage = 'An unknown error occurred!';
    }
    return throwError(this.errorMessage);
  }

  onHandleError() {
    this.errorMessage = null;
  }
}
