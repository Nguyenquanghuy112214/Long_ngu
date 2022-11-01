import { createSlice } from '@reduxjs/toolkit';

const getViPham = createSlice({
	name: 'showSearch',
	initialState: { data: '' },

	reducers: {
		showViPham: (state, action) => {
			state.data = action.payload;
		},
	},
});
const { reducer, actions } = getViPham;
export const { showViPham } = actions;
export default reducer;
