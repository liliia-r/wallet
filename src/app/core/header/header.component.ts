import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '@services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  userName: string | null;

  constructor(private authService: AuthService, private translate: TranslateService) {
    translate.addLangs(['en', 'ua']);
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    this.userName = localStorage.getItem('userName');
  }

  // switchLanguage(language: string) {
  //   this.translate.use(language);
  // }

  onLogout() {
    this.authService.logout();
  }
}
