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
	devtool: false,
	devServer: {
		port: 3002,
	},
	output: {
		publicPath: 'http://localhost:3002/',
	},
	optimization: {
		usedExports: true,
		minimize: false,
		splitChunks: {
			// 默认值 async，设置为 all，打包时间从 6min 提升到 3min
			/* ------------------ 下面是 webpack5 production 环境默认配置 ------------------ */
			minSize: 20000, // 生成 chunk 的最小体积（以 bytes 为单位）
			minRemainingSize: 20000, // 确保拆分后剩余的最小 chunk 体积超过限制来避免大小为零的模块
			minChunks: 1, // 拆分前必须共享模块的最小 chunks 数
			maxAsyncRequests: 30, // 按需加载时的最大并行请求数
			maxInitialRequests: 30, // 入口点的最大并行请求数
			enforceSizeThreshold: 50000,
			cacheGroups: {
				defaultVendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: -10,
					reuseExistingChunk: true,
					idHint: 'vendors',
				},
			},
		},
	},
	module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: require.resolve('babel-loader'),
                exclude: /node_modules/,
                options: {
                    presets: [require.resolve('@babel/preset-react')],
                },
            },
        ],
    },
    resolve: {
        extensions: ['.jsx', '.js', '.json'],
    },
	plugins: [
		new CleanWebpackPlugin(),
		new ModuleFederationPlugin({
			name: 'app2',
			// library: { type: 'var', name: 'app2' },
			filename: 'remoteEntry.js',
			exposes: {'./Button': './src/Button.js'},
			shared: {
                react: {
                    requiredVersion: false,
                    singleton: false,
					eager: false,
                },
                'react-dom': {
                    requiredVersion: false,
                    singleton: true,
					eager: false,
                },
            },
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
