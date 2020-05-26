import { AbstractControl } from '@angular/forms';

import { ValidatorExCollection } from './validator-ex-collection';


export interface AbstractControlEx {
  readonly validators: ValidatorExCollection;
}


export interface AbstractControlEx extends AbstractControl { }
