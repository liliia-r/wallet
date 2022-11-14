import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { LoginPageComponent } from './login-page.component';

import { LoginPageRoutingModule } from './login-page-routing.module';

import { ButtonModule } from '@shared/components/button/button.module';
import { LogoModule } from '@shared/components/logo/logo.module';
import { ButtonGoogleModule } from '@shared/components/button-google/button-google.module';
import { ButtonFbModule } from '@shared/components/button-fb/button-fb.module';
import { AlertModule } from '@shared/components/alert/alert.module';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoginPageRoutingModule,
    ButtonModule,
    LogoModule,
    ButtonGoogleModule,
    ButtonFbModule,
    AlertModule,
    TranslateModule,
  ],
  exports: [LoginPageComponent],
})
export class LoginPageModule {}
