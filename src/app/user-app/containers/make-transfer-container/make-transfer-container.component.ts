import {
  Component,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserHeaderMode } from '../../models/ui/user-header-mode.enum';
import { UserFooterMode } from '../../models/ui/user-footer-mode.enum';
import { MakeTransferData, createDefaultMakeTransferData } from '../../../shared-lib/models/data/make-transfer-data';
import { MatStepContentSchema } from '../../../shared-domainless-lib/models/ui/mat-step-content-schema';
import { MakeTransferWizardStepToComponent } from '../../components/make-transfer-wizard/steps/make-transfer-wizard-step-to/make-transfer-wizard-step-to.component';
import { MakeTransferWizardStepAmountComponent } from '../../components/make-transfer-wizard/steps/make-transfer-wizard-step-amount/make-transfer-wizard-step-amount.component';
import { MakeTransferWizardStepFinalComponent } from '../../components/make-transfer-wizard/steps/make-transfer-wizard-step-final/make-transfer-wizard-step-final.component';
import { UserApi } from '../../services/user-api.service';
import { DialogService } from '../../../shared-domainless-lib/services/dialog.service';
import { AppUrls } from '../../../shared-lib/services/app-urls.service';
import { ErrorMessages } from '../../../shared-lib/services/error-messages.service';
import { CurrentUserStore } from '../../services/current-user-store.service';
import { MatHorizontalStepperComponent } from '../../../shared-domainless-lib/components/mat-horizontal-stepper/mat-horizontal-stepper.component';
import { Transfer } from '../../../shared-lib/models/data/transfer';


@Component({
  templateUrl: './make-transfer-container.component.html',
  styleUrls: ['./make-transfer-container.component.scss']
})
export class MakeTransferContainerComponent implements AfterViewInit {
  UserHeaderMode = UserHeaderMode;
  UserFooterMode = UserFooterMode;

  @ViewChild('stepper') stepper: MatHorizontalStepperComponent;

  readonly steps: MatStepContentSchema[] = [
    {
      stepContentComponentClass: MakeTransferWizardStepToComponent,
    },
    {
      stepContentComponentClass: MakeTransferWizardStepAmountComponent,
    },
    {
      stepContentComponentClass: MakeTransferWizardStepFinalComponent,
    },
  ];

  data: MakeTransferData = createDefaultMakeTransferData();
  doneInProcess = false;

  constructor(
    private userApi: UserApi,
    private dialogService: DialogService,
    private router: Router,
    private route: ActivatedRoute,
    private appUrls: AppUrls,
    private errorMessages: ErrorMessages,
    private currentUserStore: CurrentUserStore,
  ) {}

  ngAfterViewInit(): void {
    const dataString = this.route.snapshot.queryParams.data as string;
    if (dataString) {
      const data = JSON.parse(dataString) as Transfer;

      this.data = {
        recipient: {
          id: null,
          name: data.username,
        },
        amount: -data.amount,
      };

      setTimeout(
        () => {
          // Use next() method because setting of selectedIndex not working
          // when stepper.linear is true.
          for (let i = 0; i < 2; i++) {
            this.stepper.next();
          }
        },
      );
    }
  }

  onDataChanged(data: MakeTransferData): void {
    this.data = data;
  }

  onDoneWithData(data: MakeTransferData): void {
    this.data = data;

    this.doneInProcess = true;
    this.userApi.makeTransfer(this.data).subscribe(
      result => {
        this.doneInProcess = false;
        this.currentUserStore.setBalance(result.trans_token.balance);
        this.dialogService.openSuccess({
          message: 'Transfer done',
        }).afterClosed().subscribe(
          result => {
            this.router.navigate([this.appUrls.user.default]);
          },
        );
      },
      error => {
        this.doneInProcess = false;
        this.dialogService.openError({
          message: this.errorMessages.httpRequestErrorMessage(error),
        });
      },
    );
  }
}
