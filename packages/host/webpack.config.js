const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const deps = require('./package.json').dependencies;
module.exports = {
	mode: 'development',
	output: {
		publicPath: 'http://localhost:4000/', // 当需要 exposes 模块时，需要设置 publicPath 为完整路径，否则会读 host 应用的 origin
	},
	devServer: {
		port: 4000,
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
		new ModuleFederationPlugin({
			name: 'reactRemote',
			filename: 'remoteEntry.js',
			remotes: {
				remote: 'remote@http://localhost:4001/_next/static/chunks/remoteEntry.js',
			},
			exposes: {
				'./Nav': './src/components/Nav.jsx',
			},
			shared: {
				react: {
					requiredVersion: false,
					singleton: true,
				},
				'react-dom': {
					requiredVersion: false,
					singleton: true,
				},
			},
		}),
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
	],
};
