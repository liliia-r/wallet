import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { throwError } from 'rxjs';
import { FirebaseError } from 'firebase/app';

import { CustomValidators } from '@shared/custom-validation/match-validation';
import { AuthService } from '@shared/services/auth/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {
  registerForm!: FormGroup;
  errorMessage!: string | null;

  get controlEmail() {
    return this.registerForm.get('email');
  }

  get controlPassword() {
    return this.registerForm.get('password');
  }

  get controlConfirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  get controlName() {
    return this.registerForm.get('name');
  }

  get passwordMatchError() {
    return (
      this.registerForm.getError('mismatch') && this.registerForm.get('confirmPassword')?.touched
    );
  }

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup(
      {
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]/g),
        ]),
        confirmPassword: new FormControl(null, [Validators.required]),
        name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      },
      [CustomValidators.MatchValidator('password', 'confirmPassword')]
    );
  }

  login() {
    this.router.navigate(['/login']);
  }

  submitRegistration() {
    if (!this.registerForm.valid) {
      return;
    }

    this.authService
      .register(this.registerForm.value)
      .then(res => {
        console.log(res);
      })
      .then(() => this.router.navigate(['/home']))
      .catch(error => this.handleError(error));

    this.registerForm.reset();
  }

  private handleError(errorRes: FirebaseError) {
    if (!errorRes.code || !errorRes.code) {
      return throwError((this.errorMessage = 'An unknown error occurred!'));
    }
    switch (errorRes.code) {
      case 'auth/email-already-in-use':
        this.errorMessage = 'This email exists already';
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
