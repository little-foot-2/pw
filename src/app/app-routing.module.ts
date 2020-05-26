import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./landing-app/landing-app.module').then(m => m.LandingAppModule),
  },
  {
    path: 'cabinet',
    loadChildren: () => import('./user-app/user-app.module').then(m => m.UserAppModule),
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
