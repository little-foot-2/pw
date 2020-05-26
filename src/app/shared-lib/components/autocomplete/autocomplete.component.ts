import {
  Component,
  Input,
  TemplateRef,
} from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';


export type AutocompleteDisplayFn = (item: any) => string;
export type AutocompleteGetItemsFunc = (filter: string) => Observable<any[]>;


@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent {
  @Input() label: string;
  @Input() matcher: ErrorStateMatcher;
  @Input() valueFormControl: FormControl;

  @Input() displayFn: AutocompleteDisplayFn;
  @Input() itemTemplate: TemplateRef<any>;
  @Input() set getItemsFunc(value: AutocompleteGetItemsFunc) {
    if (!value) {
      this.items = null;
    } else {
      this.items = this.valueFormControl.valueChanges.pipe(
        debounceTime(300),
        switchMap(value),
      );
    }
  }

  items: Observable<any[]>;

  onItemSelect(item: any): void { }
}
