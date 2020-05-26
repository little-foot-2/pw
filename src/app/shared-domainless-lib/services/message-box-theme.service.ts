import { Injectable } from '@angular/core';

import { ThemeColor } from '../models/ui/theme-color';


@Injectable({
  providedIn: 'root'
})
export class MessageBoxTheme {
  readonly okButtonColor = ThemeColor.primary;
  readonly cancelButtonColor = ThemeColor.basic;
}
