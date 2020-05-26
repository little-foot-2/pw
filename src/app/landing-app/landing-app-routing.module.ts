import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingContainerComponent } from './containers/landing-container/landing-container.component';
import { SignUpContainerComponent } from './containers/sign-up-container/sign-up-container.component';


const routes: Routes = [
  {
    path: '',
    component: LandingContainerComponent,
  },
  {
    path: 'sign-up',
    component: SignUpContainerComponent,
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingAppRoutingModule { }
