import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  Auth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import { LoginData } from '@models/login.model';
import { RegisterData } from '@models/register.model';
import { User } from '@models/user.model';

export interface AuthResponseData {
  email: string;
  uid: string;
  lastLoginAt: string;

  stsTokenManager: {
    accessToken: string;
    expirationTime: string;
    refreshToken: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  modifiedUser: any;
  userSub = new BehaviorSubject<User | null>(null);

  private tokenExpirationTimer: any;

  isLoggedIn = false;
  isRegistrationSuccessful: boolean = false;

  constructor(
    private auth: Auth,
    private router: Router,
    private firestore: Firestore,
    private angularFireAuth: AngularFireAuth
  ) {
    this.angularFireAuth.authState.subscribe((user: any) => {
      if (user) {
        const userData = JSON.parse(JSON.stringify(user));

        this.modifiedUser = {
          email: userData.email,
          uid: userData.uid,
          lastLoginAt: userData.lastLoginAt,
          accessToken: userData.stsTokenManager.accessToken,
          expirationTime: userData.stsTokenManager.expirationTime,
          refreshToken: userData.stsTokenManager.refreshToken,
        };

        localStorage.setItem('user', JSON.stringify(this.modifiedUser));
        JSON.parse(localStorage.getItem('user') || '{}');
      }
      // else {
      //   localStorage.setItem('user', 'null');
      //   JSON.parse(localStorage.getItem('user') || '{}');
      // }
    });
  }

  autoLogOut(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  register({ email, password, name }: RegisterData) {
    localStorage.setItem('userName', name);
    this.isRegistrationSuccessful = true;
    return this.angularFireAuth.createUserWithEmailAndPassword(email, password).then(result => {});
  }

  login({ email, password }: LoginData) {
    this.isLoggedIn = true;
    return this.angularFireAuth.signInWithEmailAndPassword(email, password).then(result => {
      console.log(result);
    });
  }

  loginWithGoogle() {
    this.isLoggedIn = true;
    return this.angularFireAuth.signInWithPopup(new GoogleAuthProvider());
  }

  loginWithFacebook() {
    this.isLoggedIn = true;
    return this.angularFireAuth.signInWithPopup(new FacebookAuthProvider());
  }

  logout() {
    this.isLoggedIn = false;
    this.router.navigate(['login']);
    localStorage.removeItem('user');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    return this.angularFireAuth.signOut();
  }

  isAuthenticated() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.isLoggedIn);
      }, 1000);
    });
  }
}
