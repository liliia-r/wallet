import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth/auth.service';

@Component({
  selector: 'app-button-fb',
  templateUrl: './button-fb.component.html',
  styleUrls: ['./button-fb.component.scss'],
})
export class ButtonFbComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  loginWithFacebook() {
    this.authService
      .loginWithFacebook()
      .then(() => this.router.navigate(['/home']))
      .catch(e => console.log(e.message));
  }
}
