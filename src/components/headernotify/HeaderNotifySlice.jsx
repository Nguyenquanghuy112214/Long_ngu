import { createSlice } from '@reduxjs/toolkit';

const ModalNotify = createSlice({
	name: 'showModalnotify',
	initialState: { isShow: false },

	reducers: {
		showMpdalNotify: (state, action) => {
			state.isShow = action.payload;
		},
	},
});
const { reducer, actions } = ModalNotify;
export const { showMpdalNotify } = actions;
export default reducer;
