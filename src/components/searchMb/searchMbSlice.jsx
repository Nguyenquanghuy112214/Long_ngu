import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
	name: 'showSearch',
	initialState: { isShow: false },

	reducers: {
		show: (state, action) => {
			state.isShow = action.payload;
		},
	},
});
const { reducer, actions } = searchSlice;
export const { show } = actions;
export default reducer;
