const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const ExternalTemplateRemotesPlugin = require('external-remotes-plugin');
const deps = require('./package.json').dependencies;
const http = require('http');

// 远程模块地址 map
function getRemoteEntries() {
	return new Promise(resolve => {
		const remoteMainfest =
			process.env.NODE_ENV === 'production'
				? 'http://localhost/module-federation.manifest.json'
				: 'http://localhost/module-federation.manifest.json';
		http.get(remoteMainfest, res => {
			const { statusCode } = res;
			if (statusCode !== 200) {
				console.error(statusCode);
				process.exit(0);
			}
			res.setEncoding('utf8');
			let rawData = '';
			res.on('data', chunk => {
				rawData += chunk;
			});
			res.on('end', () => {
				try {
					console.log(rawData);
					resolve(JSON.parse(rawData));
				} catch (e) {
					console.error(e.message);
					process.exit(0);
				}
			});
		});
	});
}

const doAsync = async () => {
	// const remoteEntries = await getRemoteEntries();
	return {
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
			new ExternalTemplateRemotesPlugin(),
			new ModuleFederationPlugin({
				name: 'reactRemote',
				filename: 'remoteEntry.js',
				remotes: {
					nextHost: 'nextHost@[window.nextHostUrlGlobalVariable]/remoteEntry.js?t=' + +new Date(),
					nextRemote: 'nextRemote@[window.nextRemotetUrlGlobalVariable]/remoteEntry.js?t=' + +new Date(),
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
};
module.exports = doAsync();
