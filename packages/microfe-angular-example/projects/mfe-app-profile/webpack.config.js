const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    output: {
        publicPath: "http://localhost:4201/",
        uniqueName: "app-profile",
    },
    optimization: {
        runtimeChunk: false,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "profile",
            library: { type: "var", name: "profile" },
            filename: "remoteEntry.js",
            exposes: {
                ProfileModule:
                    "./projects/mfe-app-profile/src/app/profile/profile.module.ts",
            },
            shared: {
                "@angular/core": { eager: true, singleton: true },
                "@angular/common": { eager: true, singleton: true },
                "@angular/router": { eager: true, singleton: true },
            },
        }),
    ],
};
