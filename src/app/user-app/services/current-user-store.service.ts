import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { UserInfo } from '../../shared-lib/models/data/user-info';


@Injectable({
  providedIn: 'root'
})
export class CurrentUserStore {
  private readonly userInfoSubject = new BehaviorSubject<UserInfo>(null);
  readonly userInfo$ = this.userInfoSubject.asObservable();

  get userInfo(): UserInfo {
    return this.userInfoSubject.getValue();
  }

  setUserInfo(userInfo: UserInfo): void {
    this.userInfoSubject.next(userInfo);
  }

  setBalance(balance: number): void {
    const oldUserInfo = this.userInfo;
    if (!oldUserInfo) {
      throw new Error('User info must be not undefined.');
    }

    const newUserInfo: UserInfo = { ...oldUserInfo };
    newUserInfo.user_info_token.balance = balance;

    this.setUserInfo(newUserInfo);
  }
}
