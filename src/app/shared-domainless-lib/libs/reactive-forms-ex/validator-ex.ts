import {
  AbstractControl,
  ValidatorFn,
  ValidationErrors,
} from '@angular/forms';


export interface ValidationErrorMessages {
  [errorName: string]: string;
}


export class ValidatorEx {
  readonly validatorFn: ValidatorFn;
  readonly errorMessages: ValidationErrorMessages;

  constructor(validatorFn: ValidatorFn, errorMessages: ValidationErrorMessages = {}) {
    this.validatorFn = validatorFn;
    this.errorMessages = errorMessages;
  }
}

export class ValidatorExMessagesOnly extends ValidatorEx {
  private static alwaysValidValidatorFn: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    return null;
  };

  constructor(errorMessages: ValidationErrorMessages) {
    super(ValidatorExMessagesOnly.alwaysValidValidatorFn, errorMessages);
  }
}
