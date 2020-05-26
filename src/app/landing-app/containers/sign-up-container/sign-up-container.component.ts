import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';

import { LandingHeaderMode } from '../../models/ui/landing-header-mode.enum';
import { LandingFooterMode } from '../../models/ui/landing-footer-mode.enum';
import {
  FormGroupEx,
  FormControlEx,
  ValidatorEx,
  ValidatorExMessagesOnly,
} from '../../../shared-domainless-lib/libs/reactive-forms-ex';
import { ErrorStateMatcherService } from '../../../shared-domainless-lib/services/error-state-matcher.service';
import { LandingApi } from '../../services/landing-api.service';
import { DialogService } from '../../../shared-domainless-lib/services/dialog.service';
import { LandingTheme } from '../../services/landing-theme.service';
import { AppUrls } from '../../../shared-lib/services/app-urls.service';
import { ValidatorsLib } from '../../../shared-domainless-lib/libs/validators-lib';
import { ErrorMessages } from '../../../shared-lib/services/error-messages.service';


interface SignUpData {
  username: string;
  email: string;
  password: string;
}


@Component({
  templateUrl: './sign-up-container.component.html',
  styleUrls: ['./sign-up-container.component.scss']
})
export class SignUpContainerComponent {
  LandingHeaderMode = LandingHeaderMode;
  LandingFooterMode = LandingFooterMode;

  signingUp = false;

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
        username: new FormControlEx(
          null,
          [
            new ValidatorEx(Validators.required, { required: 'Username required.' }),
            new ValidatorEx(Validators.minLength(6), { minlength: 'Username length must be greater than or equal to 6.' }),
          ],
        ),
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
            new ValidatorEx(Validators.minLength(6), { minlength: 'Password length must be greater than or equal to 6.' }),
          ],
        ),
        confirmPassword: new FormControlEx(
          null,
          [
            new ValidatorExMessagesOnly({ passwordconfirming: 'Passwords need to match.' }),
          ],
        ),
      },
    );

    this.form.validators.add(
      new ValidatorEx(ValidatorsLib.passwordConfirming(this.form.controls.password, this.form.controls.confirmPassword)),
    );
  }

  onSubmit(): void {
    if (this.form.status !== 'VALID') {
      return;
    }

    const data = this.form.value as SignUpData;

    this.signingUp = true;
    this.landingApi.signUp(data.username, data.email, data.password).subscribe(
      result => {
        this.signingUp = false;
        this.dialogService.openSuccess({
          message: 'User created',
        }).afterClosed().subscribe(
          result => {
            this.router.navigate([this.appUrls.user.default]);
          },
        );
      },
      error => {
        this.signingUp = false;
        this.dialogService.openError({
          message: this.errorMessages.httpRequestErrorMessage(error),
        });
      },
    );
  }
}
