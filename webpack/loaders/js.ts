export default {
	client: {
		test: /\.ts(x?)$/,
		exclude: /node_modules/,
		use: {
			loader: 'swc-loader',
			options: {
				parseMap: true,
			},
		},
	},
	server: {
		test: /\.ts(x?)$/,
		exclude: /node_modules/,
		use: {
			loader: 'swc-loader',
			options: {
				parseMap: true,
			},
		},
	},
};
