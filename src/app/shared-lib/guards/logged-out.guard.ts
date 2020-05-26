import { Injector, Injectable } from '@angular/core';

import { BaseAuthGuard } from './base-auth.guard';


@Injectable()
export class LoggedOutGuard extends BaseAuthGuard {
  constructor(
    injector: Injector
  ) {
    super(injector);
  }

  //#region BaseAuthGuard implementation

  protected canActivateOnAuth(): boolean {
    return true;
  }

  protected canActivateOnUnauth(): boolean {
    return true;
  }

  //#endregion
}
