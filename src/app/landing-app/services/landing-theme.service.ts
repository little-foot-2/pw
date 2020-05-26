import { Injectable } from '@angular/core';

import { ThemeColor } from '../../shared-domainless-lib/models/ui/theme-color';


@Injectable({
  providedIn: 'root'
})
export class LandingTheme {
  readonly headerColor = ThemeColor.primary;
  readonly headerSignUpButtonColor = ThemeColor.accent;

  readonly okButtonColor = ThemeColor.primary;
  readonly cancelButtonColor = ThemeColor.basic;

  readonly landingLoginOkButtonColor = ThemeColor.accent;
}
