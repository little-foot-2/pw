import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ErrorMessages {
  private static readonly unknownErrorMessage = 'Unknown error';

  simpleErrorMessage(error: any): string {
    return error ? error.toString() : ErrorMessages.unknownErrorMessage;
  }

  httpRequestErrorMessage(error: any): string {
    let message: any = error && error.error;
    if (typeof message !== 'string') {
      message = error && error.statusText;
    }
    if (typeof message !== 'string' || !message) {
      message = ErrorMessages.unknownErrorMessage;
    }
    return message;
  }
}
