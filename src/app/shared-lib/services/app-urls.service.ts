import { Injectable } from '@angular/core';


class LandingAppUrls {
  landingPage = '/';
  signUp = '/sign-up';
}


class UserAppUrls {
  main = '/cabinet/main';
  transfers = '/cabinet/transfers';
  makeTransfer = '/cabinet/make-transfer';
  profile = '/cabinet/profile';

  default = this.main;
}


@Injectable({
  providedIn: 'root'
})
export class AppUrls {
  landing = new LandingAppUrls();
  user = new UserAppUrls();
}
