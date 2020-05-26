import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatMenuModule,
  MatTabsModule,
  MatCardModule,
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { UserAppRoutingModule } from './user-app-routing.module';
import { SharedDomainlessLibModule } from '../shared-domainless-lib/shared-domainless-lib.module';
import { SharedLibModule } from '../shared-lib/shared-lib.module';
import { NgBreakpointsModule } from '../ng-breakpoints/ng-breakpoints.module';
import { PageHeaderForUserComponent } from './components/page-header-for-user/page-header-for-user.component';
import { PageFooterForUserComponent } from './components/page-footer-for-user/page-footer-for-user.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { UserProfileContainerComponent } from './containers/user-profile-container/user-profile-container.component';
import { GetUserInfoGuard } from './guards/get-user-info.guard';
import { MainContainerComponent } from './containers/main-container/main-container.component';
import { MakeTransferContainerComponent } from './containers/make-transfer-container/make-transfer-container.component';
import { MakeTransferWizardStepToComponent } from './components/make-transfer-wizard/steps/make-transfer-wizard-step-to/make-transfer-wizard-step-to.component';
import { MakeTransferWizardStepAmountComponent } from './components/make-transfer-wizard/steps/make-transfer-wizard-step-amount/make-transfer-wizard-step-amount.component';
import { MakeTransferWizardStepFinalComponent } from './components/make-transfer-wizard/steps/make-transfer-wizard-step-final/make-transfer-wizard-step-final.component';
import { HeaderUserInfoComponent } from './components/header-user-info/header-user-info.component';
import { TransferListContainerComponent } from './containers/transfer-list-container/transfer-list-container.component';


@NgModule({
  imports: [
    CommonModule,
    UserAppRoutingModule,
    SharedDomainlessLibModule,
    SharedLibModule,
    NgBreakpointsModule.forRoot(),
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatTabsModule,
    MatCardModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
  declarations: [
    PageHeaderForUserComponent,
    PageFooterForUserComponent,
    UserPageComponent,
    UserProfileContainerComponent,
    MainContainerComponent,
    MakeTransferContainerComponent,
    MakeTransferWizardStepToComponent,
    MakeTransferWizardStepAmountComponent,
    MakeTransferWizardStepFinalComponent,
    HeaderUserInfoComponent,
    TransferListContainerComponent,
  ],
  providers: [
    GetUserInfoGuard,
  ],
})
export class UserAppModule { }
