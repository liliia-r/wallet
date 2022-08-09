import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageModule } from './pages/login-page/login-page.module';
import { HomePageModule } from './pages/home-page/home-page.module';
import { CoreModule } from './core/core.module';
import { RegisterPageModule } from './pages/register-page/register-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginPageModule,
    HomePageModule,
    CoreModule,
    RegisterPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
