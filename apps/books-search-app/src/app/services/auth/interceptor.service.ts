import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { LoggerService } from '../../../../../../libs/services/logger.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor(private loggerService: LoggerService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((evt: HttpResponse<any>) => {
        if (environment.production) {
          this.loggerService.handleResponses(evt)
        }
    }),
      catchError((error: HttpErrorResponse) => {
        this.loggerService.handleError(error)
        return throwError(error);
      }))
  }

}


