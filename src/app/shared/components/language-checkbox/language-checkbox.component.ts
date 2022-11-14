import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-checkbox',
  templateUrl: './language-checkbox.component.html',
  styleUrls: ['./language-checkbox.component.scss'],
})
export class LanguageCheckboxComponent {
  isChecked: boolean = localStorage.getItem('lang') === 'en' ? true : false;

  constructor(private translateService: TranslateService) {}

  selectLanguage(event: any) {
    !event.target.checked ? localStorage.setItem('lang', 'en') : localStorage.setItem('lang', 'ua');

    this.translateService.use(localStorage.getItem('lang') || 'en');
  }
}
