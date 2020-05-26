import { FormGroup } from '@angular/forms';

import { FormControlEx } from './form-control-ex';
import { ValidatorEx } from './validator-ex';
import { FormArrayEx } from './form-array-ex';
import { ValidatorExCollection } from './validator-ex-collection';
import { AbstractControlEx } from './abstract-control-ex';


export interface FormGroupExControls {
  [key: string]: FormControlEx | FormGroupEx | FormArrayEx;
}


export class FormGroupEx extends FormGroup implements AbstractControlEx {
  private readonly _validatorCollection: ValidatorExCollection;
  get validators(): ValidatorExCollection {
    return this._validatorCollection;
  }

  constructor(
    controls: FormGroupExControls,
    validators: ValidatorEx[] = []
  ) {
    super(
      controls,
      ValidatorExCollection.mapValidatorsToValidatorFns(validators)
    );
    this._validatorCollection = new ValidatorExCollection(this, validators);
  }
}
