import { createSlice } from '@reduxjs/toolkit';

const typeGroupSlice = createSlice({
	name: 'typeGroup',
	initialState: [],

	reducers: {
		typeGroup1: (state, action) => {
			state.push(action.payload);
		},
		typeGroup2: (state, action) => {
			state.push(action.payload);
		},
		typeGroup3: (state, action) => {
			state.push(action.payload);
		},
		typeGroup4: (state, action) => {
			state.push(action.payload);
		},
	},
});
const { reducer, actions } = typeGroupSlice;
export const { typeGroup1, typeGroup2, typeGroup3, typeGroup4 } = actions;
export default reducer;
