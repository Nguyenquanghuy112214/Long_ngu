import { createSlice } from '@reduxjs/toolkit';

const nameFolderSlice = createSlice({
	name: 'nameFolder',
	initialState: [],

	reducers: {
		listNameFolder: (state, action) => {
			state.push(action.payload);
		},
	},
});
const { reducer, actions } = nameFolderSlice;
export const { listNameFolder } = actions;
export default reducer;
