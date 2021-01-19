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
    optimization: {
        runtimeChunk: false,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new ModuleFederationPlugin({
            name: 'app2',
            library: { type: 'var', name: 'app2' },
            exposes: {
                './Button': './src/Button',
                './Counter': './src/Counter',
            },
            filename: 'remoteEntry.js', // 提供给 remote 加载的 js 文件名
            shared: /* ['react', 'react-dom'] ||  */{
                'react': {
                    eager: false, // true: react 模块被整个放进 main.js, false: react 模块被单独抽离到 vender-react.js 中
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
