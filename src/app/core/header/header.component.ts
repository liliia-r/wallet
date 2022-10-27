import { LoginService } from './../../shared/services/login/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  userName: string | null;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.userName = localStorage.getItem('userName');
  }

  onLogout() {
    this.loginService.logout();
  }
}
