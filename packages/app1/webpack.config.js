/**
 * @fileoverview 
 * @author liuduan
 * @Date 2020-07-02 11:25:32
 * @LastEditTime 2020-07-02 15:55:28
 */
const path = require("path");
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 3001,
    },
    output: {
        publicPath: "http://localhost:3001/",
    },
    module: {
        rules: [
            // {
            //     test: /bootstrap\.js$/,
            //     loader: "bundle-loader",
            //     options: {
            //         lazy: true,
            //     },
            // },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react'],
                    },
                },
            },
        ],
    },
    // externals: {
    //     'react': 'React',
    //     'react-dom': 'ReactDOM',
    // },
    plugins: [
        new CleanWebpackPlugin(),
        new ModuleFederationPlugin({
            name: "app1",
            library: { type: "var", name: "app1" },
            remotes: {
                app2: "app2",
            },
            shared: ["react", "react-dom"],
        }),
        // new ModuleFederationPlugin({
        //     name: 'app1',
        //     library: { type: 'var', name: 'app1' },
        //     remotes: { app2: 'app2' },
        //     shared: /* ['react', 'react-dom'] ||  */{
        //         'react': {
        //             eager: true,
        //             singleton: true,
        //         },
        //         'react-dom': {
        //             eager: true,
        //             singleton: true,
        //         },
        //     },
        // }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};
