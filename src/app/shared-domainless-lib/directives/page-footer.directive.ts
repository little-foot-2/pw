import {
  Directive,
  Input,
} from '@angular/core';


@Directive({
  selector: '[appPageFooter]'
})
export class PageFooterDirective {
  @Input() appPageFooter: boolean;
}
