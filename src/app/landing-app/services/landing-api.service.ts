import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiUrlBuilder } from '../../shared-domainless-lib/services/api-url-builder.service';
import { AuthSession } from '../../shared-domainless-lib/services/auth-session.service';
import { SignUpResult } from '../../shared-lib/models/data/sign-up-result';
import { LoginResult } from '../../shared-lib/models/data/login-result';


@Injectable({
  providedIn: 'root'
})
export class LandingApi {
  constructor(
    private http: HttpClient,
    private apiUrlBuilder: ApiUrlBuilder,
    private authSession: AuthSession,
  ) {}

  login(
    email: string,
    password: string,
  ): Observable<LoginResult> {
    return this.http.post<LoginResult>(
      this.apiUrlBuilder.buildApiUrl('/sessions/create'),
      {
        email,
        password,
      },
      {
        headers: {},
      },
    ).pipe(
      map(
        value => {
          if (value && value.id_token) {
            this.authSession.setAuthToken(value.id_token);
          }

          return value;
        },
      ),
    );
  }

  signUp(
    username: string,
    email: string,
    password: string,
  ): Observable<SignUpResult> {
    return this.http.post<SignUpResult>(
      this.apiUrlBuilder.buildApiUrl('/users'),
      {
        username,
        email,
        password,
      },
      {
        headers: {},
      },
    ).pipe(
      map(
        value => {
          if (value && value.id_token) {
            this.authSession.setAuthToken(value.id_token);
          }

          return value;
        },
      ),
    );
  }
}
