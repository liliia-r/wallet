import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { Auth, createUserWithEmailAndPassword} from '@angular/fire/auth';

import { RegisterData } from '../../models/register.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  isRegistrationSuccessful: boolean = false

  constructor(private auth: Auth, private http: HttpClient,) { }

  register({ email, password, name }: RegisterData) {
    localStorage.setItem('userName', name)
    this.isRegistrationSuccessful = true
    return createUserWithEmailAndPassword(this.auth, email, password);
  }
}
