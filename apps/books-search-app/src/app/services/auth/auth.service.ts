import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { UsersEnum } from '../../../../../../libs/models/users.enum';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn$: Observable<boolean> = new Observable<any>(null) ;
  constructor() {
    const token = localStorage.getItem(UsersEnum.USERNAME_KEY);
    this.isLoggedIn$ = this.checkSso(token);
  }

  checkSso(token: string): Observable<boolean> {
    if (token === UsersEnum.OR) {
      return of(true);
    } else {
      return of(false);
    }
  }

  login(username: string): Observable<boolean> {
    return this.checkSso(username.toLowerCase()).pipe(tap((isValid: boolean) => {
      if (isValid) {
        this.isLoggedIn$ = of(isValid)
        localStorage.setItem(UsersEnum.USERNAME_KEY, username.toLowerCase())
      }
    }))
  }
}
