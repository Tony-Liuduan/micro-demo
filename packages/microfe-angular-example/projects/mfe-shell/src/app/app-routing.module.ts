import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReactPageComponent } from './react-page/react-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'profile-sync',
    loadChildren: () => import('profile/ProfileModule').then(m => m.ProfileModule),
  },
  {
    path: 'react-page',
    children: [
      {
        path: '**',
        component: ReactPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
