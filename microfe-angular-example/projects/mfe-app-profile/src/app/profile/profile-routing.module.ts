import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';

const routes: Routes = [
  // { path: 'profile', redirectTo: 'profile/user', pathMatch: 'full' },
  // {
  //   path: 'profile/user', loadChildren: () =>
  //     import('./modules/user/user.module').then((m) => m.UserModule),
  // }
  {
    path: '',
    component: ProfileComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule { }
