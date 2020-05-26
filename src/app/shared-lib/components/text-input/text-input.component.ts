import { Component, Input } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent {
  @Input() label: string;
  @Input() type: string;
  @Input() mask: string;
  @Input() matcher: ErrorStateMatcher;
  @Input() valueFormControl: FormControl;
}
