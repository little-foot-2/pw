import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatFormFieldModule,
  MatInputModule,
  MatAutocompleteModule,
} from '@angular/material';
import { NgxMaskModule } from 'ngx-mask';

import { SharedDomainlessLibModule } from '../shared-domainless-lib/shared-domainless-lib.module';
import { LoggedInGuard } from './guards/logged-in.guard';
import { LoggedOutGuard } from './guards/logged-out.guard';
import { TextInputComponent } from './components/text-input/text-input.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedDomainlessLibModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    NgxMaskModule.forRoot(),
  ],
  declarations: [
    TextInputComponent,
    AutocompleteComponent,
  ],
  exports: [
    TextInputComponent,
    AutocompleteComponent,
  ],
  providers: [
    LoggedInGuard,
    LoggedOutGuard,
  ],
})
export class SharedLibModule { }
