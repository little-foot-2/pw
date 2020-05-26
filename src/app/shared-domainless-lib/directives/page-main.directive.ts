import {
  Directive,
  ElementRef,
  Input,
} from '@angular/core';


@Directive({
  selector: '[appPageMain]'
})
export class PageMainDirective {
  @Input() appPageMain: boolean;

  constructor(private elementRef: ElementRef) {
    const css: { [key: string]: string } = {
      'margin': '0',
      'padding': '0',
      'flex': 'auto',
    };

    Object.assign(this.elementRef.nativeElement.style, css);
  }
}
