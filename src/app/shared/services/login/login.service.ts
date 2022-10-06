import { Injectable } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from '@angular/fire/auth';
import { LoginData } from './../../models/login.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLoggedIn = false;

  constructor(private auth: Auth) {}

  login({ email, password }: LoginData) {
    this.isLoggedIn = true
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  loginWithGoogle() {
    this.isLoggedIn = true
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  loginWithFacebook() {
    this.isLoggedIn = true
    return signInWithPopup(this.auth, new FacebookAuthProvider())
  }

  logout() {
    this.isLoggedIn = false
    return signOut(this.auth);
  }
}
