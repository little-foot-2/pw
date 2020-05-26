import {
  Directive,
  ElementRef,
  Input,
} from '@angular/core';


@Directive({
  selector: '[appPage]'
})
export class PageDirective {
  @Input() appPage: boolean;

  constructor(private elementRef: ElementRef) {
    const css: { [key: string]: string } = {
      'width': '100%',
      'height': '100%',
      'margin': '0',
      'padding': '0',
      'display': 'flex',
      'flex-direction': 'column',
    };

    Object.assign(elementRef.nativeElement.style, css);
  }
}
