import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Components
import { LoginPageComponent } from './login-page.component';
import { ButtonModule } from '../../shared/components/button/button.module';
import { LogoModule } from '../../shared/components/logo/logo.module';
import { ButtonGoogleModule } from '../../shared/components/button-google/button-google.module';
import { ButtonFbModule } from '../../shared/components/button-fb/button-fb.module';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    LogoModule,
    ButtonGoogleModule,
    ButtonFbModule,
  ],
  exports: [LoginPageComponent],
})
export class LoginPageModule {}
