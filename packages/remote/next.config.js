const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const nextConfig = {
	reactStrictMode: true,
  swcMinify: true,
	webpack(config) {
		config.plugins.push(
			new NextFederationPlugin({
				name: 'remote',
				filename: 'static/chunks/remoteEntry.js',
				remotes: {},
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
