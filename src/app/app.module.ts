import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/';

import { environment } from '@env';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { LoginPageModule } from '@pages/login-page/login-page.module';
import { HomePageModule } from '@pages/home-page/home-page.module';
import { CoreModule } from '@core/core.module';
import { RegisterPageModule } from '@pages/register-page/register-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginPageModule,
    HomePageModule,
    CoreModule,
    RegisterPageModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [AngularFireModule, AngularFireAuthModule, AngularFirestoreModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
