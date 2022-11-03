const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const deps = require('./package.json').dependencies;
module.exports = {
	mode: 'development',
	output: {
		publicPath: '/',
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
			name: 'host',
			filename: 'remoteEntry.js',
			remotes: {
				remote: 'remote@http://localhost:4001/_next/static/chunks/remoteEntry.js',
			},
			exposes: {},
			shared: {
				react: {
					// Notice shared are NOT eager here.
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
