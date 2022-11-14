import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '@core/header/header.component';
import { LanguageCheckboxModule } from '@shared/components/language-checkbox/language-checkbox.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, LanguageCheckboxModule, TranslateModule],
  exports: [HeaderComponent],
})
export class CoreModule {}
