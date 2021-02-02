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
                "@angular/core": { eager: true, singleton: true }, // eager 设置为 false 报错... crazy
                "@angular/common": { eager: true, singleton: true },
                "@angular/router": { eager: true, singleton: true },
            },
        }),
    ],
};
