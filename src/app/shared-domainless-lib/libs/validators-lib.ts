import {
  AbstractControl,
  ValidatorFn,
  ValidationErrors,
} from '@angular/forms';


class ValidatorsLib_Class {
  passwordConfirming(
    passwordControl: AbstractControl,
    confirmPasswordControl: AbstractControl,
  ): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const confirmPasswordValid =
        passwordControl.value === confirmPasswordControl.value
        && confirmPasswordControl.value;

      if (confirmPasswordValid) {
        confirmPasswordControl.setErrors(null);
      } else {
        const errors = confirmPasswordControl.errors || {};
        errors.passwordconfirming = true;

        confirmPasswordControl.setErrors(errors, { emitEvent: true });
      }

      return null;
    };
  }

  email(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (typeof value === 'string' && value) {
      const regEx = new RegExp(/^\S+@\S+\.\S+$/);
      if (!regEx.test(value)) {
        return {
          email: true,
        };
      }
    } else if (!value) {
      return null;
    } else {
      throw new Error('Value of control must be string, null of undefined');
    }
  }

  autoselectRequired(requiredTypeof: string = 'object'): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (typeof control.value !== requiredTypeof) {
        return {
          required: true,
        };
      }

      return null;
    };
  }

  minOrMax(minOrMax: number, isMin: boolean): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (this.valueIsNullOrEmptyOrWhitespace(control)) {
        return null;
      }

      this.checkValueIsString(control);

      const num = Number(control.value.trim());
      if (isMin) {
        if (num < minOrMax) {
          return { min: true };
        }
      } else {
        if (num > minOrMax) {
          return { max: true };
        }
      }

      return null;
    };
  }

  min(min: number): ValidatorFn {
    return this.minOrMax(min, true);
  }

  max(max: number): ValidatorFn {
    return this.minOrMax(max, false);
  }

  private valueIsNullOrEmptyOrWhitespace(control: AbstractControl): boolean {
    return !control.value || (typeof control.value === 'string' && !control.value.trim());
  }

  private checkValueIsString(control: AbstractControl): void {
    if (typeof control.value !== 'string') {
      throw new Error('Control value must be a string');
    }
  }
}

export const ValidatorsLib = new ValidatorsLib_Class();
