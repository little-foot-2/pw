import {
  Directive,
  ElementRef,
  OnInit,
  Input,
} from '@angular/core';

import { HtmlUtils } from '../services/html-utils.service';


@Directive({
  selector: '[appButtonInfiniteProgress]'
})
export class ButtonInfiniteProgressDirective implements OnInit {
  private static readonly rootClass = 'gl-button-infinite-progress';
  private static readonly rootProgressClass = 'gl-button-infinite-progress--progress';

  private _appButtonInfiniteProgress = false;
  get appButtonInfiniteProgress(): boolean {
    return this._appButtonInfiniteProgress;
  }
  @Input() set appButtonInfiniteProgress(value: boolean) {
    this._appButtonInfiniteProgress = value;
    this.refreshProgressVisibility();
  }

  constructor(
    private elementRef: ElementRef<HTMLButtonElement>,
    private htmlUtils: HtmlUtils,
  ) { }

  ngOnInit(): void {
    this.insertProgressBar();
  }

  private insertProgressBar(): void {
    this.elementRef.nativeElement.prepend(
      this.htmlUtils.createElementFromHTML('<div class="gl-progress"><div class="gl-infinite-progress-bar"></div></div>'),
    );
    this.elementRef.nativeElement.classList.add(ButtonInfiniteProgressDirective.rootClass);
    this.refreshProgressVisibility();
  }

  private refreshProgressVisibility(): void {
    if (this.appButtonInfiniteProgress) {
      this.elementRef.nativeElement.classList.add(ButtonInfiniteProgressDirective.rootProgressClass);
      this.elementRef.nativeElement.disabled = true;
    } else {
      this.elementRef.nativeElement.classList.remove(ButtonInfiniteProgressDirective.rootProgressClass);
      this.elementRef.nativeElement.disabled = false;
    }
  }
}
