const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	webpack(config, _options) {
		config.plugins.push(
			new NextFederationPlugin({
				name: 'remote',
				filename: 'static/chunks/remoteEntry.js',
				remotes: {
					reactRemote: 'reactRemote@http://localhost:4000/remoteEntry.js',
					nextRemote: 'nextRemote@http://localhost:4002/_next/static/chunks/remoteEntry.js',
				},
				exposes: {
					'./nextjs-remote-component': './components/nextjs-remote-component.js',
					'./nextjs-remote-page': './pages/index.js',
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
				extraOptions: {
					skipSharingNextInternals: true,
				},
			})
		);
		return config;
	},
};

module.exports = nextConfig;
