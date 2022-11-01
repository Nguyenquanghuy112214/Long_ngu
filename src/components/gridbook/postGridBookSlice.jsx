import { createSlice } from '@reduxjs/toolkit';

const ToltalGridBook = createSlice({
	name: 'PostGridBook',
	initialState: [],

	reducers: {
		PostGridBook: (state, action) => {
			if (state.length === 0) {
				state.push(action.payload);
			} else if (state.length > 0) {
				state.splice(0, 1);
				state.push(action.payload);
			}
		},
	},
});
const { reducer, actions } = ToltalGridBook;
export const { PostGridBook } = actions;
export default reducer;
