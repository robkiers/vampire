import { Injectable, Pipe, inject } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Observable, Subscription, map } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private _isLoggedIn = false;
  private sub?: Subscription;
  // private user: Observable<User>;

  http = inject(HttpService);
  router = inject(Router);

  constructor() {}

  login(email: string, password: string) {
    this.sub = this.http
      .post<User>('Account/Login', {
        email: email,
        password: password,
      })
      .pipe(
        map((response) => {
          if (response.token) {
            localStorage.setItem('currentUser', JSON.stringify(response));
            this._isLoggedIn = true;
          } else {
            this._isLoggedIn = false;
          }
        })
      )
      .subscribe((complete) => {
        console.log(complete);
        this.router.navigate(['main']);
      });
  }

  protected set isLoggedIn(loggedIn: boolean) {
    this._isLoggedIn = loggedIn;
  }

  get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }
}

export interface User {
  userName: string;
  token: string;
  role: string;
  expiresIn: 0;
  expireStamp: Date;
}
