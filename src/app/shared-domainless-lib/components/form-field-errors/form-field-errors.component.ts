import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnDestroy,
  Input,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { AbstractControlEx } from '../../libs/reactive-forms-ex';


@Component({
  selector: 'app-form-field-errors',
  templateUrl: './form-field-errors.component.html',
  styleUrls: ['./form-field-errors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFieldErrorsComponent implements OnDestroy {
  private controlSub: Subscription;

  private _control: AbstractControlEx;
  get control(): AbstractControlEx {
    return this._control;
  }
  @Input() set control(value: AbstractControlEx) {
    if (this._control) {
      this.controlSub.unsubscribe();
      this.controlSub = null;
    }

    if (value) {
      this._control = value;
      this.controlSub = new Subscription();

      this.controlSub.add(
        this._control.valueChanges.subscribe(
          value => this.onValueChanged(value),
        ),
      );
    }
  }

  constructor(
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnDestroy(): void {
    this.control = null;
  }

  getErrorMessages(): string[] {
    return this.control && this.control.validators && this.control.validators.getErrorMessages();
  }

  private onValueChanged(value: any): void {
    this.cdr.markForCheck();
  }
}
