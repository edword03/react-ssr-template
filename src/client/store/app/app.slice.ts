import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
	name: 'appSlice',
	initialState: {
		counter: 0,
	},
	reducers: {
		increase(state) {
			state.counter = state.counter + 1;
		},
		decrease(state) {
			state.counter = state.counter - 1;
		},
	},
});

export const appReducer = appSlice.reducer;
export const { increase, decrease } = appSlice.actions;
