import path from 'path';

const IS_DEV = process.env.NODE_ENV !== 'production';

function getPathDir(path: path) {
	const SRC_DIR = path.resolve(__dirname, '../src');
	const DIST_DIR = path.resolve(__dirname, '../dist');
	return { SRC_DIR, DIST_DIR };
}

export { IS_DEV, getPathDir };
