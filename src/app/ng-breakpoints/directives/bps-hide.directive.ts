import {
  Injector,
  Directive,
  Input,
  ElementRef,
} from '@angular/core';

import { BaseBpsDirective } from './base-bps.directive';


@Directive({
  selector: '[appBpsHide]'
})
export class BpsHideDirective extends BaseBpsDirective {
  @Input() set appBpsHide(value: string) {
    this.bpsValue = value;
  }

  constructor(
    injector: Injector,
    private elementRef: ElementRef,
  ) {
    super(injector);
  }

  protected onPassed(): void {
    this.elementRef.nativeElement.style.display = 'none';
  }

  protected onNotPassed(): void {
    this.elementRef.nativeElement.style.display = '';
  }
}
