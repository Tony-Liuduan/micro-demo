const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    output: {
        filename: '[name].[chunkhash].js',
        uniqueName: "shell",
    },
    optimization: {
        runtimeChunk: false,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'shell',
            library: { type: 'var', name: 'shell' },
            remotes: {
                app2: 'app2',
                profile: 'profile',
            }, // 类似 externals,  值是 App2 lib name, key 是 App1 中调用时用的名字
            filename: "remoteEntry.js",
            exposes: {
                './AppModule':
                    "./projects/mfe-shell/src/app/app.module.ts",
                './HomeComponent':
                    "./projects/mfe-shell/src/app/home/home.component.ts",
            },
            shared: {
                "@angular/core": { eager: false, singleton: true },
                "@angular/common": { eager: false, singleton: true },
                "@angular/router": { eager: false, singleton: true },
                "rxjs": { eager: false, singleton: true },
                "zone.js": { eager: false, singleton: true },
            },
        }),
    ],
};
