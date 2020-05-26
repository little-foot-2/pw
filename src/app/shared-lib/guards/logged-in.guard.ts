import { Injector, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { BaseAuthGuard } from './base-auth.guard';
import { AppUrls } from '../services/app-urls.service';


@Injectable()
export class LoggedInGuard extends BaseAuthGuard {
  private router: Router;
  private appUrls: AppUrls;

  constructor(
    injector: Injector
  ) {
    super(injector);
    this.router = injector.get(Router);
    this.appUrls = injector.get(AppUrls);
  }

  //#region BaseAuthGuard implementation

  protected canActivateOnAuth(): boolean {
    return true;
  }

  protected canActivateOnUnauth(): boolean {
    this.navigateToHome();
    return false;
  }

  //#endregion

  private navigateToHome(): void {
    this.router.navigate([this.appUrls.landing.landingPage]);
  }
}
