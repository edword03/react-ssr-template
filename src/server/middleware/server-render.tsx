import { renderToString } from 'react-dom/server';
import { App } from '../../client/App';
import { Response, Request } from 'express';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import { makeStore } from '../../client/store/store';
import serialize from 'serialize-javascript';

import ssrPrepass from 'react-ssr-prepass';

export const renderController = async (req: Request, res: Response) => {
	const store = makeStore({ app: { counter: 10 } });

	const state = store.getState();
	console.log(state);

	const node = (
		<Provider store={store}>
			<StaticRouter location={req.url}>
				<App />
			</StaticRouter>
		</Provider>
	);

	await ssrPrepass(node, (element, instance) => {
		// console.log(element.type, instance);
	});

	const reactHtml = renderToString(node);
	res.setHeader('Content-Type', 'text/html; charset=UTF-8');
	res.status(200).send(getHtml(reactHtml, state));
};

function getHtml(html: string, store) {
	return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="shortcut icon" type="image/ico" href="/public/favicons/favicon.ico">
        <link rel="apple-touch-icon" sizes="180x180" href="/public/favicons/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/public/favicons/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/public/favicons/favicon-16x16.png">
        <title>Sneakers shop</title>
    </head>
    <body>
        <div id="app">${html}</div>
        <script src="/main.js"></script>
        <script>window.__INITIAL_STATE__ = ${serialize(store).replace(/</g, '\\\u003c')}</script>
    </body>
    </html>
  `;
}
