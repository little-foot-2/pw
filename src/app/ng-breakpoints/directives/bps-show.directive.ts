import {
  Injector,
  Directive,
  Input,
  ElementRef,
} from '@angular/core';

import { BaseBpsDirective } from './base-bps.directive';


@Directive({
  selector: '[appBpsShow]'
})
export class BpsShowDirective extends BaseBpsDirective {
  @Input() set appBpsShow(value: string) {
    this.bpsValue = value;
  }

  constructor(
    injector: Injector,
    private elementRef: ElementRef,
  ) {
    super(injector);
  }

  protected onPassed(): void {
    this.elementRef.nativeElement.style.display = '';
  }

  protected onNotPassed(): void {
    this.elementRef.nativeElement.style.display = 'none';
  }
}
