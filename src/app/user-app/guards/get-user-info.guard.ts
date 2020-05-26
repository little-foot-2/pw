import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import { UserApi } from '../services/user-api.service';
import { CurrentUserStore } from '../services/current-user-store.service';
import { ErrorTypeChecker } from '../../shared-lib/services/error-type-checker.service';
import { ErrorMessages } from '../../shared-lib/services/error-messages.service';


@Injectable({
  providedIn: 'root'
})
export class GetUserInfoGuard implements CanActivateChild {
  constructor(
    private userApi: UserApi,
    private currentUserStore: CurrentUserStore,
    private errorTypeChecker: ErrorTypeChecker,
    private errorMessages: ErrorMessages,
    private toastr: ToastrService,
  ) { }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.currentUserStore.setUserInfo(null);
    return new Promise((resolve, reject) => {
      this.userApi.getUserInfo().subscribe(
        userInfo => {
          this.currentUserStore.setUserInfo(userInfo);
          resolve(true);
        },
        error => {
          if (this.errorTypeChecker.isUnauthorized(error)) {
            this.toastr.error('You are unauthorized');
            this.userApi.logout();
            resolve(false);
          } else {
            this.toastr.error(
              this.errorMessages.httpRequestErrorMessage(error),
            );
            resolve(true);
          }
        },
      );
    });
  }
}
