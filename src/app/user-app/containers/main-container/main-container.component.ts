import { Component, OnInit } from '@angular/core';

import { UserHeaderMode } from '../../models/ui/user-header-mode.enum';
import { UserFooterMode } from '../../models/ui/user-footer-mode.enum';
import { UserApi } from '../../services/user-api.service';
import { UserInfo } from '../../../shared-lib/models/data/user-info';
import { DialogService } from '../../../shared-domainless-lib/services/dialog.service';
import { ErrorMessages } from '../../../shared-lib/services/error-messages.service';
import { UserTheme } from '../../services/user-theme.service';
import { AppUrls } from '../../../shared-lib/services/app-urls.service';


@Component({
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {
  UserHeaderMode = UserHeaderMode;
  UserFooterMode = UserFooterMode;

  userInfo: UserInfo;
  userInfoGetting = false;

  constructor(
    public appUrls: AppUrls,
    public userTheme: UserTheme,
    private userApi: UserApi,
    private dialogService: DialogService,
    private errorMessages: ErrorMessages,
  ) {}

  ngOnInit(): void {
    this.userInfoGetting = true;
    this.userApi.getUserInfo().subscribe(
      userInfo => {
        this.userInfoGetting = false;
        this.userInfo = userInfo;
      },
      error => {
        this.userInfoGetting = false;
        this.dialogService.openError({
          message: this.errorMessages.httpRequestErrorMessage(error),
        });
      },
    );
  }
}
