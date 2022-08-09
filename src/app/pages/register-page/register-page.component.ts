import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {
  form!: FormGroup;
  isSubmitted: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(25),
        Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
      ]),
      confirm_password: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  login() {
    this.router.navigate(['/login']);
  }

  submitRegistration() {}
}
