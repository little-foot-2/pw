import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';

import { LandingHeaderMode } from '../../models/ui/landing-header-mode.enum';
import { LandingFooterMode } from '../../models/ui/landing-footer-mode.enum';
import { ErrorStateMatcherService } from '../../../shared-domainless-lib/services/error-state-matcher.service';
import {
  FormGroupEx,
  FormControlEx,
  ValidatorEx,
} from '../../../shared-domainless-lib/libs/reactive-forms-ex';
import { LandingApi } from '../../services/landing-api.service';
import { DialogService } from '../../../shared-domainless-lib/services/dialog.service';
import { AppUrls } from '../../../shared-lib/services/app-urls.service';
import { ValidatorsLib } from '../../../shared-domainless-lib/libs/validators-lib';
import { ErrorMessages } from '../../../shared-lib/services/error-messages.service';
import { LandingTheme } from '../../services/landing-theme.service';


interface LoginData {
  email: string;
  password: string;
}


@Component({
  templateUrl: './landing-container.component.html',
  styleUrls: ['./landing-container.component.scss']
})
export class LandingContainerComponent {
  LandingHeaderMode = LandingHeaderMode;
  LandingFooterMode = LandingFooterMode;

  logining = false;

  form: FormGroupEx;
  matcher: ErrorStateMatcher;

  constructor(
    public landingTheme: LandingTheme,
    private appUrls: AppUrls,
    private errorStateMatcherService: ErrorStateMatcherService,
    private landingApi: LandingApi,
    private dialogService: DialogService,
    private router: Router,
    private errorMessages: ErrorMessages,
  ) {
    this.matcher = errorStateMatcherService.matcher;
    this.initForm();
  }

  private initForm(): void {
    this.form = new FormGroupEx(
      {
        email: new FormControlEx(
          null,
          [
            new ValidatorEx(Validators.required, { required: 'Email required.' }),
            new ValidatorEx(ValidatorsLib.email, { email: 'Invalid email.' }),
          ],
        ),
        password: new FormControlEx(
          null,
          [
            new ValidatorEx(Validators.required, { required: 'Password required.' }),
          ],
        ),
      },
    );
  }

  onSubmit(): void {
    if (this.form.status !== 'VALID') {
      return;
    }

    const data = this.form.value as LoginData;

    this.logining = true;
    this.landingApi.login(data.email, data.password).subscribe(
      result => {
        this.logining = false;
        this.router.navigate([this.appUrls.user.default]);
      },
      error => {
        this.logining = false;
        this.dialogService.openError({
          message: this.errorMessages.httpRequestErrorMessage(error),
        });
      },
    );
  }
}
