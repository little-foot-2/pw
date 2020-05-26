import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedDomainlessLibModule } from '../shared-domainless-lib/shared-domainless-lib.module';
import { SharedLibModule } from '../shared-lib/shared-lib.module';
import { NgBreakpointsModule } from '../ng-breakpoints/ng-breakpoints.module';
import { LandingAppRoutingModule } from './landing-app-routing.module';
import { LandingContainerComponent } from './containers/landing-container/landing-container.component';
import { PageHeaderForLandingComponent } from './components/page-header-for-landing/page-header-for-landing.component';
import { SignUpContainerComponent } from './containers/sign-up-container/sign-up-container.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PageFooterForLandingComponent } from './components/page-footer-for-landing/page-footer-for-landing.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LandingAppRoutingModule,
    SharedDomainlessLibModule,
    SharedLibModule,
    NgBreakpointsModule.forRoot(),
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
  ],
  declarations: [
    LandingContainerComponent,
    PageHeaderForLandingComponent,
    SignUpContainerComponent,
    LandingPageComponent,
    PageFooterForLandingComponent,
  ],
})
export class LandingAppModule { }
