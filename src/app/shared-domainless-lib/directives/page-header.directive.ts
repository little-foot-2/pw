import {
  Directive,
  Input,
} from '@angular/core';


@Directive({
  selector: '[appPageHeader]'
})
export class PageHeaderDirective {
  @Input() appPageHeader: boolean;
}
