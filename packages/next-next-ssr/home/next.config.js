const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const remotes = isServer => {
	const location = isServer ? 'ssr' : 'chunks';
	return {
		home: `home@http://localhost:8000/_next/static/${location}/remoteEntry.js`,
		shop: `shop@http://localhost:8001/_next/static/${location}/remoteEntry.js`,
	};
};

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	webpack(config, options) {
		config.plugins.push(
			new NextFederationPlugin({
				name: 'home',
				filename: 'static/chunks/remoteEntry.js',
				remotes: remotes(options.isServer),
				exposes: {
					'./nav': './components/nav.js',
					'./home': './async-pages/index.js',
					'./pages-map': './pages-map.js',
				},
				shared: {},
			})
		);
		return config;
	},
};

module.exports = nextConfig;
