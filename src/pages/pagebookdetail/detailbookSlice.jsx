import { createSlice } from '@reduxjs/toolkit';

const detailBook = createSlice({
	name: 'PostCount',
	initialState: [],

	reducers: {
		postdetailBook: (state, action) => {
			if (state.length === 0) {
				state.push(action.payload);
			} else if (state.length > 0) {
				state.push(action.payload);
				state.shift();
			}
		},
	},
});
const { reducer, actions } = detailBook;
export const { postdetailBook } = actions;
export default reducer;
