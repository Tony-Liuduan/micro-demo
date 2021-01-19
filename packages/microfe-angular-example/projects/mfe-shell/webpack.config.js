const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    output: {
        publicPath: "http://localhost:4200/",
        uniqueName: "shell",
    },
    optimization: {
        runtimeChunk: false,
    },
    plugins: [
        new ModuleFederationPlugin({
            shared: {
                "@angular/core": { eager: true, singleton: true }, // eager 设置为 false 报错... crazy
                "@angular/common": { eager: true, singleton: true },
                "@angular/router": { eager: true, singleton: true },
            },
        }),
    ],
};
