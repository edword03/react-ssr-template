import path from 'path';
import { Configuration, Entry } from 'webpack';
import { Configuration as WebpackDevSeverConfig } from 'webpack-dev-server';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
const TerserPlugin = require('terser-webpack-plugin');

import { IS_DEV, getPathDir } from './env';
import fileLoader from './loaders/file';
import cssLoader from './loaders/css';
import jsLoader from './loaders/js';

const { SRC_DIR, DIST_DIR } = getPathDir(path);

const config: Configuration = {
	entry: [
		IS_DEV && 'react-hot-loader/patch',
		IS_DEV && 'webpack-hot-middleware/client?reload=true&timeout=2000',
		IS_DEV && 'css-hot-loader/hotModuleReplacement',
		path.join(SRC_DIR, 'client', 'client.tsx'),
	].filter(Boolean) as unknown as Entry,
	module: {
		rules: [fileLoader.client, cssLoader.client, jsLoader.client],
	},
	output: {
		path: DIST_DIR,
		filename: '[name].js',
		publicPath: '/',
	},
	resolve: {
		modules: ['src', 'node_modules', 'webpack'],
		extensions: ['.*', '.js', '.jsx', '.json', '.ts', '.tsx'],
		plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
		fallback: {
			url: false,
			path: false,
		},
	},
	devServer: {
		historyApiFallback: true,
		hot: true,
		compress: false,
		port: 9000,
		static: {
			directory: path.join(__dirname, 'static'),
			publicPath: '/',
		},
		devMiddleware: {
			writeToDisk: true,
		},
	},
	plugins: [
		new MiniCssExtractPlugin({ filename: '[name].css' }),
		!IS_DEV && new CompressionPlugin(),
		new CopyWebpackPlugin({
			patterns: [{ from: 'static/favicons', to: 'public/favicons' }],
		}),
	].filter(Boolean),

	devtool: 'source-map',

	performance: {
		hints: IS_DEV ? false : 'warning',
	},
	optimization: {
		minimizer: [
			!IS_DEV &&
				new TerserPlugin({
					parallel: true,
					minify: TerserPlugin.swcMinify,
					terserOptions: {
						compress: {},
						mangle: true,
					},
				}),
		].filter(Boolean),
	},
};

export default config;
