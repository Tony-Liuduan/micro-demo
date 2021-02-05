import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpaHostComponent } from './spa-host/spa-host.component';

const routes: Routes = [
  {
    path: '',
    component: SpaHostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
