/**
 * @fileoverview 
 * @author liuduan
 * @Date 2020-07-02 11:25:32
 * @LastEditTime 2020-07-02 15:43:39
 */
const path = require('path');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 3002,
    },
    output: {
        publicPath: 'http://localhost:3002/',
    },
    module: {
        rules: [
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
            name: "app2",
            library: { type: "var", name: "app2" },
            filename: "remoteEntry.js",
            exposes: {
                "./Button": "./src/Button",
            },
            shared: ["react", "react-dom"],
        }),
        // new ModuleFederationPlugin({
        //     name: 'app2',
        //     library: { type: 'var', name: 'app2' },
        //     exposes: {
        //         './Button': './src/Button',
        //         './Counter': './src/Counter',
        //     },
        //     filename: 'remoteEntry.js',
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
