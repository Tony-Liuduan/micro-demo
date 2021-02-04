import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { buildRoutes } from '../utils/route-utils';
import { Microfrontend } from './microfrontend.model';

@Injectable({ providedIn: 'root' })
export class MicrofrontendService {
  microfrontends: Microfrontend[] = [];

  constructor(private router: Router) { }

  /*
   * Initialize is called on app startup to load the initial list of
   * remote microfrontends and configure them within the router
   */
  initialise(): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
      this.microfrontends = await this.loadConfig();
      let config = this.router.config;
      config = config.concat(buildRoutes(this.microfrontends));
      this.router.resetConfig(config);
      resolve();
    });
  }

  loadConfig(): Promise<Microfrontend[]> {
    return import('@configs/module-federation').then((microFrontendRoutes: any) => {
      const remoteRouteConfigs: any[] = [];
      Object.keys(microFrontendRoutes).forEach(key => {
        const config: any = microFrontendRoutes[key];
        const remoteEntry = `${config.origin}${config.filename}`;
        config.exposes?.forEach((item: any) => {
          if (item.routeConfig) {
            remoteRouteConfigs.push({
              ...item.routeConfig,
              remoteEntry,
              remoteName: config.libraryName,
              exposedModule: item.exposedName,
            });
          }
        });
      });
      return remoteRouteConfigs;
    });
  }
}
