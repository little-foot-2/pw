import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import {
  MatDialogModule,
  MatButtonModule,
  MatStepperModule,
} from '@angular/material';

import { PageDirective } from './directives/page.directive';
import { PageHeaderDirective } from './directives/page-header.directive';
import { PageMainDirective } from './directives/page-main.directive';
import { PageFooterDirective } from './directives/page-footer.directive';
import { FormFieldErrorsComponent } from './components/form-field-errors/form-field-errors.component';
import { MessageBoxComponent } from './components/message-box/message-box.component';
import { InfiniteProgressBarComponent } from './components/infinite-progress-bar/infinite-progress-bar.component';
import { ButtonInfiniteProgressDirective } from './directives/button-infinite-progress.directive';
import { FormGroupDirective } from './directives/form-group.directive';
import { MatStepContentContainerComponent } from './components/mat-step-content-container/mat-step-content-container.component';
import { MatHorizontalStepperComponent } from './components/mat-horizontal-stepper/mat-horizontal-stepper.component';
import { LoadableContentComponent } from './components/loadable-content/loadable-content.component';
import { EmptiableListComponent } from './components/emptiable-list/emptiable-list.component';


@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatStepperModule,
  ],
  declarations: [
    PageDirective,
    PageHeaderDirective,
    PageMainDirective,
    PageFooterDirective,
    FormFieldErrorsComponent,
    MessageBoxComponent,
    InfiniteProgressBarComponent,
    ButtonInfiniteProgressDirective,
    FormGroupDirective,
    MatStepContentContainerComponent,
    MatHorizontalStepperComponent,
    LoadableContentComponent,
    EmptiableListComponent,
  ],
  exports: [
    PageDirective,
    PageHeaderDirective,
    PageMainDirective,
    PageFooterDirective,
    FormFieldErrorsComponent,
    InfiniteProgressBarComponent,
    ButtonInfiniteProgressDirective,
    FormGroupDirective,
    MatStepContentContainerComponent,
    MatHorizontalStepperComponent,
    LoadableContentComponent,
    EmptiableListComponent,
  ],
  providers: [
    CookieService,
  ],
})
export class SharedDomainlessLibModule { }
