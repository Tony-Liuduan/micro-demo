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
    optimization: {
        runtimeChunk: false,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new ModuleFederationPlugin({
            name: 'app1',
            library: { type: 'var', name: 'app1' },
            remotes: { app2: 'app2' }, // 类似 externals,  值是 App2 lib name, key 是 App1 中调用时用的名字
            shared: /* ['react', 'react-dom'] ||  */ {
                'react': {
                    eager: false,
                    singleton: true,
                },
                'react-dom': {
                    eager: false,
                    singleton: true,
                },
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};
