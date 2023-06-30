import path from 'path';
import express from 'express';
import compression from 'compression';
import cors from 'cors';
import { renderController } from './middleware/server-render';

import serve from 'serve-static';

const app = express();

console.log(process.cwd());

app
	.use(cors({ origin: '*' }))
	.use(compression())
	.use(serve(path.resolve(process.cwd(), 'dist')))
	.use(express.static(path.resolve(__dirname, '../../static')));

app.get('/*', renderController);

export { app };
