import { Component, Input } from '@angular/core';

import { MatStepContentComponent } from '../../../../../shared-domainless-lib/components/mat-step-content';
import { MakeTransferData } from '../../../../../shared-lib/models/data/make-transfer-data';
import { CurrentUserStore } from '../../../../services/current-user-store.service';
import { FormGroupEx } from '../../../../../shared-domainless-lib/libs/reactive-forms-ex';


@Component({
  selector: 'app-make-transfer-wizard-step-final',
  templateUrl: './make-transfer-wizard-step-final.component.html',
  styleUrls: ['./make-transfer-wizard-step-final.component.scss']
})
export class MakeTransferWizardStepFinalComponent extends MatStepContentComponent {
  //#region MatStepContentComponent implementation

  readonly title = 'Final';
  readonly stepControl: FormGroupEx = null;
  @Input() data: MakeTransferData;

  //#endregion

  balance: number;

  constructor(
    private currentUserStore: CurrentUserStore,
  ) {
    super();

    this.balance = this.currentUserStore.userInfo?.user_info_token?.balance;
  }

  //#region MatStepContentComponent implementation

  getData(): MakeTransferData {
    return { ...this.data };
  }

  //#endregion
}
