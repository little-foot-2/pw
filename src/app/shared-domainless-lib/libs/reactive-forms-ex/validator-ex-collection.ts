import { AbstractControl, ValidatorFn } from '@angular/forms';

import { ValidationErrorMessages, ValidatorEx } from './validator-ex';


export class ValidatorExCollection {
  private readonly _control: AbstractControl;
  private readonly _validators: ValidatorEx[];
  private readonly _errorMessages: ValidationErrorMessages;
  private readonly _errorNamesSortedInPriorityOrder: string[];

  constructor(control: AbstractControl, validators: ValidatorEx[] = null) {
    if (!control) {
      throw new Error('Control required');
    }
    this._control = control;
    this._validators = [];
    this._errorMessages = {};
    this._errorNamesSortedInPriorityOrder = [];
    if (validators) {
      this.add(...validators);
    }
  }

  static mapValidatorsToValidatorFns(validators: ValidatorEx[]): ValidatorFn[] {
    return validators.map(validator => validator.validatorFn);
  }

  add(...validators: ValidatorEx[]): void {
    const anyNewValidator = !!(validators && validators.length);
    if (!anyNewValidator) {
      return;
    }

    for (const curValidator of validators) {
      if (!curValidator) {
        throw new Error('Validator required');
      }
    }

    // Add validators to list

    this._validators.push(...validators);

    // Add validators to control

    this._control.setValidators(this._validators.map(curValidator => curValidator.validatorFn));
    this._control.updateValueAndValidity();

    // Add validators error messages

    for (const curValidator of validators) {
      if (!curValidator.errorMessages) {
        continue;
      }

      for (const errorName in curValidator.errorMessages) {
        if (!curValidator.errorMessages.hasOwnProperty(errorName)) {
          continue;
        }

        if (this._errorMessages.hasOwnProperty(errorName)) {
          throw new Error(`Error names conflict in Validator collection. Error name: ${errorName}`);
        }

        this._errorMessages[errorName] = curValidator.errorMessages[errorName];
        this._errorNamesSortedInPriorityOrder.push(errorName);
      }
    }
  }

  getErrorMessages(): string[] {
    const errorMessages: ValidationErrorMessages = {};
    if (this._control.errors) {
      const errorNameList = Object.keys(this._control.errors);
      for (const errorName of errorNameList) {
        if (this._errorMessages.hasOwnProperty(errorName)) {
          errorMessages[errorName] = this._errorMessages[errorName];
        }
      }
    }
    const errorNames = Object.keys(errorMessages);
    const firstErrorName = this._errorNamesSortedInPriorityOrder.find(errorName => errorNames.includes(errorName));
    const firstErrorMessage = errorMessages[firstErrorName];
    return [firstErrorMessage];
  }
}
