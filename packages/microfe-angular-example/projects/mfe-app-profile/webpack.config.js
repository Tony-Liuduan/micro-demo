const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    output: {
        uniqueName: "app-profile",
    },
    optimization: {
        runtimeChunk: false,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "profile",
            library: { type: "var", name: "profile" },
            remotes: {
                shell: 'shell',
            },
            filename: "remoteEntry.js",
            exposes: {
                './ProfileModule':
                    "./projects/mfe-app-profile/src/app/profile/profile.module.ts",
                './ProfileComponent':
                    "./projects/mfe-app-profile/src/app/profile/profile.component.ts",
            },
            shared: {
                "@angular/core": { eager: true, singleton: true },
                "@angular/common": { eager: true, singleton: true },
                "@angular/router": { eager: true, singleton: true },
            },
        }),
    ],
};
