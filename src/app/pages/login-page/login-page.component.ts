import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../shared/services/login/login.service';
import { LocalStoreService } from '../../shared/services/localStore/local-store.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  constructor(
    private localStoreService: LocalStoreService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.localStoreService.loadState('USER')) {
      this.router.navigate(['/home']);
    }
  }

  register() {
    this.router.navigate(['/register']);
  }
}
