/**
 * @fileoverview 
 * @author liuduan
 * @Date 2020-07-02 11:25:32
 * @LastEditTime 2020-07-02 14:27:55
 */
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    target: 'web',
    mode: 'development',
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
    output: {
        publicPath: 'http://localhost:3001/',
    },
    // externals: {
    //     'react': 'React',
    //     'react-dom': 'ReactDOM',
    // },
    plugins: [
        new ModuleFederationPlugin({
            name: 'app1',
            library: { type: 'var', name: 'app1' },
            remotes: { app2: 'app2' },
            shared: /* ['react', 'react-dom'] ||  */{
                'react': {
                    eager: true,
                    singleton: true,
                },
                'react-dom': {
                    eager: true,
                    singleton: true,
                },
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            chunks: ['main'],
        }),
    ],
};
