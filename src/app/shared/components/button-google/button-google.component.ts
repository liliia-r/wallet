import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth/auth.service';

@Component({
  selector: 'app-button-google',
  templateUrl: './button-google.component.html',
  styleUrls: ['./button-google.component.scss'],
})
export class ButtonGoogleComponent {
  constructor(private authService: AuthService, private router: Router) {}

  loginWithGoogle() {
    this.authService
      .loginWithGoogle()
      .then(() => this.router.navigate(['/home']))
      .catch(e => console.log(e.message));
  }
}
