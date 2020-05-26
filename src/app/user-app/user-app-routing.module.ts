import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainContainerComponent } from './containers/main-container/main-container.component';
import { MakeTransferContainerComponent } from './containers/make-transfer-container/make-transfer-container.component';
import { UserProfileContainerComponent } from './containers/user-profile-container/user-profile-container.component';
import { LoggedInGuard } from '../shared-lib/guards/logged-in.guard';
import { GetUserInfoGuard } from './guards/get-user-info.guard';
import { TransferListContainerComponent } from './containers/transfer-list-container/transfer-list-container.component';


const routes: Routes = [
  {
    path: '',
    canActivateChild: [LoggedInGuard, GetUserInfoGuard],
    children: [
      {
        path: 'main',
        component: MainContainerComponent,
      },
      {
        path: 'transfers',
        component: TransferListContainerComponent,
      },
      {
        path: 'make-transfer',
        component: MakeTransferContainerComponent,
      },
      {
        path: 'profile',
        component: UserProfileContainerComponent,
      },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAppRoutingModule { }
