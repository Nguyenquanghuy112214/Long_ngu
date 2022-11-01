import { createSlice } from '@reduxjs/toolkit';

const BorrowBook = createSlice({
	name: 'showSearch',
	initialState: { isShow: false, content: '' },

	reducers: {
		showModalBorrowBook: (state, action) => {
			state.isShow = action.payload;
		},
	},
});
const { reducer, actions } = BorrowBook;
export const { showModalBorrowBook } = actions;
export default reducer;
