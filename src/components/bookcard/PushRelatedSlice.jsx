import { createSlice } from '@reduxjs/toolkit';

const PushRelateBook = createSlice({
	name: 'pushRelateBook',
	initialState: [],

	reducers: {
		pushRelateBook: (state, action) => {
			state.pop();
			state.push(action.payload);
		},
	},
});
const { reducer, actions } = PushRelateBook;
export const { pushRelateBook } = actions;
export default reducer;
