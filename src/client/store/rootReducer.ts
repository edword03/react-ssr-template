import { combineReducers } from '@reduxjs/toolkit';
import { appReducer } from './app/app.slice';

export const rootReducer = combineReducers({
	app: appReducer,
});
