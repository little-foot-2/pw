import {
  Injector,
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
  ChangeDetectorRef,
} from '@angular/core';

import { BaseBpsDirective } from './base-bps.directive';


@Directive({
  selector: '[appBpsIf]'
})
export class BpsIfDirective extends BaseBpsDirective {
  @Input() set appBpsIf(value: string) {
    this.bpsValue = value;
  }

  constructor(
    injector: Injector,
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private cdr: ChangeDetectorRef,
  ) {
    super(injector);
  }

  protected onPassed(): void {
    this.viewContainerRef.createEmbeddedView(this.templateRef);
    this.cdr.markForCheck();
  }

  protected onNotPassed(): void {
    this.viewContainerRef.clear();
    this.cdr.markForCheck();
  }
}
