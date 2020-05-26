import { Injectable } from '@angular/core';

import { ThemeColor } from '../../shared-domainless-lib/models/ui/theme-color';


@Injectable({
  providedIn: 'root'
})
export class UserTheme {
  readonly headerColor = ThemeColor.primary;
  readonly headerUserButtonColor = ThemeColor.accent;

  readonly okButtonColor = ThemeColor.primary;
  readonly cancelButtonColor = ThemeColor.basic;

  readonly mainPage_makeTransferButtonColor = ThemeColor.accent;
}
