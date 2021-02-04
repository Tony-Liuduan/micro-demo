
import {
    SHELL_REMOTE_CONFIG,
    PROFILE_REMOTE_CONFIG,
    REACT_APP2_REMOTE_CONFIG,
} from './manifest/manifest';

export const MODULE_FEDERATION_SHELL = {
    ...SHELL_REMOTE_CONFIG,
    remotes: [
        {
            remoteName: PROFILE_REMOTE_CONFIG.libraryName,
            remoteEntry: `${PROFILE_REMOTE_CONFIG.origin}${PROFILE_REMOTE_CONFIG.filename}`,
        },
        {
            remoteName: REACT_APP2_REMOTE_CONFIG.libraryName,
            remoteEntry: `${REACT_APP2_REMOTE_CONFIG.origin}${REACT_APP2_REMOTE_CONFIG.filename}`,
        },
    ],
    exposes: [
        {
            exposedName: './AppModule',
            exposedPath: './projects/mfe-shell/src/app/app.module.ts',
        },
        {
            exposedName: './HomeComponent',
            exposedPath: './projects/mfe-shell/src/app/app.module.ts',
        },
    ],
};

export const MODULE_FEDERATION_PROFILE = {
    ...PROFILE_REMOTE_CONFIG,
    remotes: [
        {
            remoteName: SHELL_REMOTE_CONFIG.libraryName,
            remoteEntry: `${SHELL_REMOTE_CONFIG.origin}${SHELL_REMOTE_CONFIG.filename}`,
        }
    ],
    exposes: [
        {
            exposedName: './ProfileModule',
            exposedPath: './projects/mfe-app-profile/src/app/profile/profile.module.ts',

            // route config
            routeConfig: {
                displayName: 'Profile',
                routePath: 'profile',
                // remoteImportPath: `${PROFILE_REMOTE_CONFIG.libraryName}/ProfileModule`, // 给其他模块调用时路由地址
                // localImportPath: './profile/profile.module.ts',  // 当前子模块调用自身地址
                ngModuleName: 'ProfileModule', // export 模块名
            }
        },
        {
            exposedName: './ProfileComponent',
            exposedPath: './projects/mfe-app-profile/src/app/profile/profile.component.ts',
        },
    ],
};
