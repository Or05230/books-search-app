import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AuthService } from './auth.service';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public router: Router, private authService: AuthService) {}

  canActivate(next: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean | UrlTree> | boolean {
    return this.authService.isLoggedIn$.pipe(tap((loggedIn: boolean) => {
      if (!loggedIn) {
        this.router.navigate(['login']).then();
      }
    }));
  }
}
