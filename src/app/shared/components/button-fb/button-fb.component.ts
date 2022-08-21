import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './../../services/login/login.service';

@Component({
  selector: 'app-button-fb',
  templateUrl: './button-fb.component.html',
  styleUrls: ['./button-fb.component.scss']
})
export class ButtonFbComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {}

  loginWithFacebook() {
    this.loginService
      .loginWithFacebook()
      .then(() => this.router.navigate(['/home']))
      .catch((e) => console.log(e.message));
  }

}
