import { createSlice } from '@reduxjs/toolkit';

const dataSearch = createSlice({
	name: 'dataSearch',
	initialState: { a: 0 },

	reducers: {
		postDataSearch: (state, action) => {
			state.a = action.payload;
		},
	},
});
const { reducer, actions } = dataSearch;
export const { postDataSearch } = actions;
export default reducer;
