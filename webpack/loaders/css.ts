const path = require('path');
const postcssNested = require('postcss-nested');
const postcssCustomMedia = require('postcss-custom-media');
const postcssImport = require('postcss-import');
const postcssImportAliasResolver = require('postcss-import-alias-resolver');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const cssnano = require('cssnano');

const { IS_DEV } = require('../env');

const resolverOptions = {
	alias: { styles: path.resolve('src/styles') },
	mergeExtensions: 'extend',
};

export default {
	client: {
		test: /\.css$/,
		use: [
			IS_DEV && 'css-hot-loader',
			IS_DEV ? 'style-loader' : MiniCssExtractPlugin.loader,
			{
				loader: 'css-loader',
				options: {
					modules: true,
				},
			},
			{
				loader: 'postcss-loader',
				options: {
					postcssOptions: {
						plugins: [
							postcssImport({
								resolve: postcssImportAliasResolver(resolverOptions),
							}),
							postcssCustomMedia(),
							postcssNested(),
							!IS_DEV && cssnano({ preset: 'default' }),
						].filter(Boolean),
					},
				},
			},
		].filter(Boolean),
	},
	server: {
		test: /\.css$/,
		use: 'null-loader',
	},
};
