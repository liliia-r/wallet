import { Component, OnInit } from '@angular/core';
import { AuthService } from '@services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  userName: string | null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.userName = localStorage.getItem('userName');
  }

  onLogout() {
    this.authService.logout();
  }
}
