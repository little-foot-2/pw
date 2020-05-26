import { Injector } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthSession } from '../../shared-domainless-lib/services/auth-session.service';


export abstract class BaseAuthGuard implements CanActivateChild {
  private authSession: AuthSession;

  constructor(
    injector: Injector
  ) {
    this.authSession = injector.get(AuthSession);
  }

  protected abstract canActivateOnAuth(): boolean;
  protected abstract canActivateOnUnauth(): boolean;

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let canActivate: boolean;

    if (this.authSession.getAuthToken()) {
      canActivate = this.canActivateOnAuth();
    }
    else {
      canActivate = this.canActivateOnUnauth();
    }

    return canActivate;
  }
}
