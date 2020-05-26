import { Component, Input } from '@angular/core';
import { Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';

import { MatStepContentComponent } from '../../../../../shared-domainless-lib/components/mat-step-content';
import {
  FormGroupEx,
  FormControlEx,
  ValidatorEx,
} from '../../../../../shared-domainless-lib/libs/reactive-forms-ex';
import { UserApi } from '../../../../services/user-api.service';
import { UserShortInfo } from '../../../../../shared-lib/models/data/user-short-info';
import { ValidatorsLib } from '../../../../../shared-domainless-lib/libs/validators-lib';
import { MakeTransferData } from '../../../../../shared-lib/models/data/make-transfer-data';


@Component({
  selector: 'app-make-transfer-wizard-step-to',
  templateUrl: './make-transfer-wizard-step-to.component.html',
  styleUrls: ['./make-transfer-wizard-step-to.component.scss'],
})
export class MakeTransferWizardStepToComponent extends MatStepContentComponent {
  //#region MatStepContentComponent implementation

  readonly title = 'Select recipient';
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

  userAutocomplete_displayFn = this._userAutocomplete_displayFn.bind(this);
  userAutocomplete_getItemsFunc = this._userAutocomplete_getItemsFunc.bind(this);

  constructor(
    private userApi: UserApi,
  ) {
    super();

    this.initForm();
  }

  //#region MatStepContentComponent implementation

  getData(): MakeTransferData {
    let recipient = this.stepControl.controls.recipient.value;
    if (typeof recipient !== 'object') {
      recipient = null;
    }

    this.data.recipient = recipient;

    return { ...this.data };
  }

  //#endregion

  private initForm(): void {
    this.stepControl = new FormGroupEx(
      {
        recipient: new FormControlEx(
          null,
          [
            new ValidatorEx(Validators.required, { required: 'You must select a user.' }),
            new ValidatorEx(ValidatorsLib.autoselectRequired('object')),
          ],
        ),
      },
    );

    this.applyData();
  }

  private applyData(): void {
    if (!this.stepControl) {
      return;
    }

    this.stepControl.controls.recipient.setValue(this.data?.recipient);
  }

  private _userAutocomplete_displayFn(user: UserShortInfo): string {
    return user && user.name;
  }

  private _userAutocomplete_getItemsFunc(filter: string): Observable<UserShortInfo[]> {
    if (typeof filter !== 'string' || !filter) {
      return of([]);
    }

    return this.userApi.getUsersWithFilter(filter);
  }
}
