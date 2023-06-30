import { WebpackConfiguration } from 'webpack-cli';
import path from 'path';

import { IS_DEV, getPathDir } from './env';
import fileLoader from './loaders/file';
import cssLoader from './loaders/css';
import jsLoader from './loaders/js';
import webpackNodeExternals from 'webpack-node-externals';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';

const { SRC_DIR, DIST_DIR } = getPathDir(path);

const config: WebpackConfiguration = {
	name: 'server',
	target: 'node',
	entry: path.join(SRC_DIR, 'server/index.ts'),
	node: { __dirname: true, __filename: true },
	output: {
		filename: 'server.js',
		libraryTarget: 'commonjs2',
		path: DIST_DIR,
		publicPath: '/static/',
		chunkFilename: '[id].js',
	},
	module: {
		rules: [fileLoader.server, cssLoader.server, jsLoader.server],
	},
	resolve: {
		modules: ['src', 'node_modules'],
		extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
		plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
	},
	devtool: 'source-map',

	performance: {
		hints: IS_DEV ? false : 'warning',
	},
	externals: [
		webpackNodeExternals({
			allowlist: [/\.(?!(?:tsx?|json)$).{1,5}$/i],
		}),
	],
};

export default config;
