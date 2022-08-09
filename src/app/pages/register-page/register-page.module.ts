import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegisterPageComponent } from './register-page.component';

import { ButtonModule } from '../../shared/components/button/button.module';
import { LogoModule } from '../../shared/components/logo/logo.module';
import { ButtonGoogleModule } from '../../shared/components/button-google/button-google.module';
import { ButtonFbModule } from '../../shared/components/button-fb/button-fb.module';

@NgModule({
  declarations: [RegisterPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    LogoModule,
    ButtonGoogleModule,
    ButtonFbModule,
  ],
  exports: [RegisterPageComponent],
})
export class RegisterPageModule {}