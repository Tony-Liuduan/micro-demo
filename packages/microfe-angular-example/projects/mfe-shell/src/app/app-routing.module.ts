import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from './utils/federation-utils';

console.log(import('app2/Button')); // TODO: angular remote react js loadChildren
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'profile',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'profile',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: 'ProfileModule',
      }).then((m) => m.ProfileModule),
  },
  // {
  //   path: 'reactApp',
  //   loadChildren: () => import('app2/Button').then(x => {
  //     console.log(x);
  //     return x;
  //   })
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
