import { createSlice } from '@reduxjs/toolkit';

const PostCountSlice = createSlice({
	name: 'PostCount',
	initialState: [],

	reducers: {
		postCount: (state, action) => {
			if (state.length === 0) {
				state.push(action.payload);
			} else if (state.length > 0) {
				state.push(action.payload);
				state.shift();
			}
		},
	},
});
const { reducer, actions } = PostCountSlice;
export const { postCount } = actions;
export default reducer;
