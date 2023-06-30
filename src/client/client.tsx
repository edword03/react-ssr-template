import { hydrateRoot } from 'react-dom/client';
import React from 'react';
import { Provider } from 'react-redux';
import { makeStore } from './store/store';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';

import './styles/index.css';

declare global {
	interface Window {
		__INITIAL_STATE__?: object;
	}
}

const initialState = window.__INITIAL_STATE__;
console.log(initialState);
// delete window.__INITIAL_STATE__;

const store = makeStore(initialState);

console.log(store.getState());

hydrateRoot(
	document.getElementById('app'),
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
);
