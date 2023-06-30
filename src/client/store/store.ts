import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import { IS_DEV } from '../../../webpack/env';

export const makeStore = (initialState?: any) => {
	console.log(initialState);
	return configureStore({
		reducer: rootReducer,
		preloadedState: initialState,
		devTools: IS_DEV,
	});
};

export type Store = ReturnType<typeof makeStore>;
export type AppState = ReturnType<Store['getState']>;
export type AppDispatch = Store['dispatch'];
