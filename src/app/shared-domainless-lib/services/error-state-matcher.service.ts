import { Injectable } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';


export class DefErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return !!(control && control.invalid && (control.touched || form.submitted));
  }
}


@Injectable({
  providedIn: 'root'
})
export class ErrorStateMatcherService {
  readonly matcher = new DefErrorStateMatcher();
}
