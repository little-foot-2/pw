import { FormControl } from '@angular/forms';

import { ValidatorEx } from './validator-ex';
import { ValidatorExCollection } from './validator-ex-collection';
import { AbstractControlEx } from './abstract-control-ex';


export class FormControlEx extends FormControl implements AbstractControlEx {
  private readonly _validatorCollection: ValidatorExCollection;
  get validators(): ValidatorExCollection {
    return this._validatorCollection;
  }

  constructor(formState: any = null, validators: ValidatorEx[] = []) {
    super(
      formState,
      ValidatorExCollection.mapValidatorsToValidatorFns(validators)
    );
    this._validatorCollection = new ValidatorExCollection(this, validators);
  }
}
