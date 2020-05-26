import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import { CurrentUserStore } from '../../services/current-user-store.service';
import { ErrorMessages } from '../../../shared-lib/services/error-messages.service';
import { UserTheme } from '../../services/user-theme.service';
import { AppUrls } from '../../../shared-lib/services/app-urls.service';
import { UserApi } from '../../services/user-api.service';


@Component({
  selector: 'app-header-user-info',
  templateUrl: './header-user-info.component.html',
  styleUrls: ['./header-user-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderUserInfoComponent implements OnInit, OnDestroy {
  private allTimeSubs = new Subscription();

  userInfoSetted: boolean;
  username: string;
  balance: number;

  constructor(
    public userTheme: UserTheme,
    private currentUserStore: CurrentUserStore,
    private toastr: ToastrService,
    private errorMessages: ErrorMessages,
    private cdr: ChangeDetectorRef,
    private appUrls: AppUrls,
    private router: Router,
    private userApi: UserApi,
  ) { }

  ngOnInit(): void {
    this.allTimeSubs.add(
      this.currentUserStore.userInfo$.subscribe(
        userInfo => {
          if (userInfo) {
            this.userInfoSetted = true;
            this.username = userInfo.user_info_token.name;
            this.balance = userInfo.user_info_token.balance;
          } else {
            this.userInfoSetted = false;
            this.username = null;
            this.balance = null;
          }

          this.cdr.markForCheck();
        },
        error => {
          this.userInfoSetted = false;
          this.username = null;
          this.balance = null;

          this.cdr.markForCheck();

          this.toastr.error(
            this.errorMessages.simpleErrorMessage(error),
          );
        },
      ),
    );
  }

  ngOnDestroy(): void {
    this.allTimeSubs.unsubscribe();
  }

  onProfileClick(): void {
    this.router.navigate([this.appUrls.user.profile]);
  }

  onLogoutClick(): void {
    this.userApi.logout();
  }
}
