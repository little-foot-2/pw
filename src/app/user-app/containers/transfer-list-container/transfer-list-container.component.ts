import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserHeaderMode } from '../../models/ui/user-header-mode.enum';
import { UserFooterMode } from '../../models/ui/user-footer-mode.enum';
import { UserApi } from '../../services/user-api.service';
import { DialogService } from '../../../shared-domainless-lib/services/dialog.service';
import { ErrorMessages } from '../../../shared-lib/services/error-messages.service';
import { Transfer } from '../../../shared-lib/models/data/transfer';
import { AppUrls } from '../../../shared-lib/services/app-urls.service';


@Component({
  templateUrl: './transfer-list-container.component.html',
  styleUrls: ['./transfer-list-container.component.scss']
})
export class TransferListContainerComponent implements OnInit {
  UserHeaderMode = UserHeaderMode;
  UserFooterMode = UserFooterMode;

  loading = false;
  transfers: Transfer[];

  constructor(
    private userApi: UserApi,
    private dialogService: DialogService,
    private errorMessages: ErrorMessages,
    private router: Router,
    private appUrls: AppUrls,
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.userApi.getTransferList().subscribe(
      result => {
        this.loading = false;
        this.transfers = result.trans_token;
      },
      error => {
        this.loading = false;
        this.dialogService.openError({
          message: this.errorMessages.httpRequestErrorMessage(error),
        });
      },
    );
  }

  onRepeatTransferClick(transfer: Transfer): void {
    this.router.navigate(
      [this.appUrls.user.makeTransfer],
      { queryParams: { data: JSON.stringify(transfer) } },
    );
  }
}
