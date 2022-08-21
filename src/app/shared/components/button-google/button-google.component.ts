import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './../../services/login/login.service';

@Component({
  selector: 'app-button-google',
  templateUrl: './button-google.component.html',
  styleUrls: ['./button-google.component.scss']
})
export class ButtonGoogleComponent  {

  constructor(private loginService: LoginService, private router: Router) {}

  loginWithGoogle() {
    this.loginService
      .loginWithGoogle()
      .then(() => this.router.navigate(['/home']))
      .catch((e) => console.log(e.message));
  }
}
