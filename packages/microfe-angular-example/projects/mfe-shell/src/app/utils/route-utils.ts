import { loadRemoteModule } from './federation-utils';
import { Routes } from '@angular/router';
import { Microfrontend } from '../microfrontends/microfrontend.model';
import { APP_ROUTES } from '../app.routes';

export function buildRoutes(options: Microfrontend[]): Routes {
  /* {
    displayName: "Profile"
    exposedModule: "ProfileModule"
    ngModuleName: "ProfileModule"
    remoteEntry: "http://localhost:4201/remoteEntry.js"
    remoteName: "profile"
    routePath: "profile"
  } */
  const lazyRoutes: Routes = options.map((o) => ({
    path: o.routePath,
    // loadChildren: () => import('xxpath').then(m => m.XxxModule),
    loadChildren: () => loadRemoteModule(o).then((m) => m[o.ngModuleName]),
  }));

  return [...APP_ROUTES, ...lazyRoutes];
}
