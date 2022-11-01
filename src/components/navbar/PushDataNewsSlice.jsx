import { createSlice } from '@reduxjs/toolkit';

const pushNews = createSlice({
	name: 'PushNews',
	initialState: [],

	reducers: {
		pushAllNews: (state, action) => {
			if (state.length === 0) {
				state.push(action.payload);
			} else if (state.length > 0) {
				state.push(action.payload);
				state.shift();
			}
		},
	},
});
const { reducer, actions } = pushNews;
export const { pushAllNews } = actions;
export default reducer;
