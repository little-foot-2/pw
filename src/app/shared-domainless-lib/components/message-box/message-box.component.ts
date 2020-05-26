import { Component } from '@angular/core';

import { MessageBoxData } from '../../models/ui/message-box-data';
import { MessageBoxButtons } from '../../models/ui/message-box-buttons.enum';
import { MessageBoxMode } from '../../models/ui/message-box-mode.enum';
import { MessageBoxTheme } from '../../services/message-box-theme.service';


@Component({
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.scss'],
})
export class MessageBoxComponent {
  MessageBoxMode = MessageBoxMode;

  title: string;
  message: string;
  buttons: MessageBoxButtons;

  mode: MessageBoxMode;

  get data(): MessageBoxData {
    return <MessageBoxData>{
      title: this.title,
      message: this.message,
      buttons: this.buttons,
    };
  }
  set data(value: MessageBoxData) {
    if (!value) {
      this.title = null;
      this.message = null;
      this.buttons = MessageBoxButtons.Ok;
    } else {
      this.title = value.title;
      this.message = value.message;
      this.buttons = value.buttons;
    }
  }

  get showTitle(): boolean {
    return !!this.title;
  }
  get showMessage(): boolean {
    return !!this.message;
  }

  get showOkButton(): boolean {
    return this.buttons === MessageBoxButtons.OkCancel
      || this.buttons === MessageBoxButtons.Ok;
  }
  get showCancelButton(): boolean {
    return this.buttons === MessageBoxButtons.OkCancel
      || this.buttons === MessageBoxButtons.Cancel;
  }
  get showYesButton(): boolean {
    return this.buttons === MessageBoxButtons.YesNo
      || this.buttons === MessageBoxButtons.Yes;
  }
  get showNoButton(): boolean {
    return this.buttons === MessageBoxButtons.YesNo
      || this.buttons === MessageBoxButtons.No;
  }

  constructor(
    public messageBoxTheme: MessageBoxTheme,
  ) {}
}
