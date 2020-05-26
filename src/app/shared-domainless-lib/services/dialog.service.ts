import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { MessageBoxComponent } from '../components/message-box/message-box.component';
import { MessageBoxMode } from '../models/ui/message-box-mode.enum';
import { MessageBoxButtons } from '../models/ui/message-box-buttons.enum';
import { MessageBoxData } from '../models/ui/message-box-data';
import { SuccessMessageBoxData } from '../models/ui/success-message-box-data';
import { ErrorMessageBoxData } from '../models/ui/error-message-box-data';


@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(
    private dialog: MatDialog,
  ) {}

  openMessageBox(data: MessageBoxData): MatDialogRef<MessageBoxComponent> {
    return this.openMessageBoxEx(data, MessageBoxMode.Standard);
  }

  openSuccess(data: SuccessMessageBoxData): MatDialogRef<MessageBoxComponent> {
    return this.openMessageBoxEx(
      {
        title: null,
        message: data && data.message,
        buttons: MessageBoxButtons.Ok,
      },
      MessageBoxMode.Success,
    );
  }

  openError(data: ErrorMessageBoxData): MatDialogRef<MessageBoxComponent> {
    return this.openMessageBoxEx(
      {
        title: null,
        message: data && data.message,
        buttons: MessageBoxButtons.Ok,
      },
      MessageBoxMode.Error,
    );
  }

  openMessageBoxEx(
    data: MessageBoxData,
    mode: MessageBoxMode,
  ): MatDialogRef<MessageBoxComponent> {
    const dialogRef = this.dialog.open(MessageBoxComponent);
    dialogRef.componentInstance.data = data;
    dialogRef.componentInstance.mode = mode;
    return dialogRef;
  }
}
