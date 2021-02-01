import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReactPageComponent } from './react-page/react-page.component';

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'react-page',
    children: [
      {
        path: '**',
        component: ReactPageComponent,
      },
    ],
  }
];
