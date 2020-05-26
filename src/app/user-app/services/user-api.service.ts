import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ApiUrlBuilder } from '../../shared-domainless-lib/services/api-url-builder.service';
import { AuthSession } from '../../shared-domainless-lib/services/auth-session.service';
import { UserInfo } from '../../shared-lib/models/data/user-info';
import { UserShortInfo } from '../../shared-lib/models/data/user-short-info';
import { AppUrls } from '../../shared-lib/services/app-urls.service';
import { MakeTransferData } from '../../shared-lib/models/data/make-transfer-data';
import { MakeTransferResult } from '../../shared-lib/models/data/make-transfer-result';
import { GetTransferListResult } from '../../shared-lib/models/data/get-transfer-list-result';


@Injectable({
  providedIn: 'root'
})
export class UserApi {
  constructor(
    private http: HttpClient,
    private apiUrlBuilder: ApiUrlBuilder,
    private authSession: AuthSession,
    private router: Router,
    private appUrls: AppUrls,
  ) { }

  logout(): void {
    this.authSession.deleteAuthToken();
    this.router.navigate([this.appUrls.landing.landingPage]);
  }

  getUserInfo(): Observable<UserInfo> {
    return this.http.get<UserInfo>(
      this.apiUrlBuilder.buildApiUrl('/api/protected/user-info'),
      {
        headers: {},
      },
    );
  }

  getUsersWithFilter(filter: string): Observable<UserShortInfo[]> {
    return this.http.post<UserShortInfo[]>(
      this.apiUrlBuilder.buildApiUrl('/api/protected/users/list'),
      {
        filter,
      },
      {
        headers: {},
      },
    );
  }

  getTransferList(): Observable<GetTransferListResult> {
    return this.http.get<GetTransferListResult>(
      this.apiUrlBuilder.buildApiUrl('/api/protected/transactions'),
      {
        headers: {},
      },
    );
  }

  makeTransfer(data: MakeTransferData): Observable<MakeTransferResult> {
    return this.http.post<MakeTransferResult>(
      this.apiUrlBuilder.buildApiUrl('/api/protected/transactions'),
      {
        name: data.recipient.name,
        amount: data.amount,
      },
      {
        headers: {},
      },
    );
  }
}
