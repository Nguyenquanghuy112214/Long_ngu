import { createSlice } from '@reduxjs/toolkit';

const PostMenu = createSlice({
	name: 'PostMenu',
	initialState: [],

	reducers: {
		postMenu: (state, action) => {
			if (state.length === 0) {
				state.push(action.payload);
			} else if (state.length > 0) {
				state.push(action.payload);
				state.shift();
			}
		},
	},
});
const { reducer, actions } = PostMenu;
export const { postMenu } = actions;
export default reducer;
