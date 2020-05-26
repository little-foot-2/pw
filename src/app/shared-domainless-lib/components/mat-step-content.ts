import { AbstractControl } from '@angular/forms';


export abstract class MatStepContentComponent {
  abstract get title(): string;
  abstract get stepControl(): AbstractControl;

  abstract set data(value: any);
  abstract getData(): any;
}
