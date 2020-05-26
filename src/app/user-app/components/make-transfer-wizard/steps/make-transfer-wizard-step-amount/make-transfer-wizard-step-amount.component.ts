import { Component, Input } from '@angular/core';
import { Validators } from '@angular/forms';

import { MatStepContentComponent } from '../../../../../shared-domainless-lib/components/mat-step-content';
import {
  FormGroupEx,
  FormControlEx,
  ValidatorEx,
} from '../../../../../shared-domainless-lib/libs/reactive-forms-ex';
import { ValidatorsLib } from '../../../../../shared-domainless-lib/libs/validators-lib';
import { MakeTransferData } from '../../../../../shared-lib/models/data/make-transfer-data';
import { CurrentUserStore } from '../../../../services/current-user-store.service';


@Component({
  selector: 'app-make-transfer-wizard-step-amount',
  templateUrl: './make-transfer-wizard-step-amount.component.html',
  styleUrls: ['./make-transfer-wizard-step-amount.component.scss'],
})
export class MakeTransferWizardStepAmountComponent extends MatStepContentComponent {
  //#region MatStepContentComponent implementation

  readonly title = 'Select amount';
  stepControl: FormGroupEx;

  private _data: MakeTransferData;
  get data(): MakeTransferData {
    return this._data;
  }
  @Input() set data(value: MakeTransferData) {
    this._data = value;
    this.applyData();
  }

  //#endregion

  balance: number;

  constructor(
    private currentUserStore: CurrentUserStore,
  ) {
    super();

    this.balance = this.currentUserStore.userInfo?.user_info_token?.balance;
    this.initForm();
  }

  //#region MatStepContentComponent implementation

  getData(): MakeTransferData {
    const amountString: string = this.stepControl.controls.amount.value;
    this.data.amount = amountString && Number(amountString);

    return { ...this.data };
  }

  //#endregion

  private initForm(): void {
    this.stepControl = new FormGroupEx(
      {
        amount: new FormControlEx(
          null,
          [
            new ValidatorEx(Validators.required, { required: 'You must enter an amount.' }),
            new ValidatorEx(Validators.min(0.01), { min: 'Amount must be greater than 0.' }),
          ],
        ),
      },
    );

    if (typeof this.balance === 'number') {
      (this.stepControl.controls.amount as FormControlEx).validators.add(
        new ValidatorEx(Validators.max(this.balance), { max: `Only ${this.balance} dollar(s) on your balance.` }),
      );
    }

    this.applyData();
  }

  private applyData(): void {
    if (!this.stepControl) {
      return;
    }

    this.stepControl.controls.amount.setValue(this.data?.amount);
  }
}
