const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const remotes = isServer => {
	const location = isServer ? 'ssr' : 'chunks';
	return {
		home: `home@http://localhost:8000/_next/static/${location}/remoteEntry.js`,
	};
};

const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
	webpack(config, options) {
		config.plugins.push(
			new NextFederationPlugin({
				name: 'shop',
				filename: 'static/chunks/remoteEntry.js',
				remotes: remotes(options.isServer),
				exposes: {
					'./shop': './async-pages/shop.js',
					'./title': './components/exposedTitle.js',
				},
				shared: {},
			})
		);
		return config;
	},
};

module.exports = nextConfig;
