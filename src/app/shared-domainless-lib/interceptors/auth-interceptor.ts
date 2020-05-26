import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AuthSession } from '../services/auth-session.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private authSession: AuthSession,
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    let newRequest: HttpRequest<any>;

    const authToken = this.authSession.getAuthToken();
    if (!authToken) {
      newRequest = request;
    } else {
      const newHeaders = request.headers.set('Authorization', `Bearer ${authToken}`);
      newRequest = request.clone({
        headers: newHeaders,
      });
    }

    return next.handle(newRequest).pipe(
      tap(
        event => {},
        err => {
          console.log('HTTP Response Error:');
          console.error(err);
        },
      ),
    );
  }
}
