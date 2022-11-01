import { createSlice } from '@reduxjs/toolkit';

const postIDBookSlice = createSlice({
	name: 'postIDBook',
	initialState: { a: [], b: [], c: [], d: [] },

	reducers: {
		postIDBook: (state, action) => {
			if (!state.a.includes(action.payload.data) && action.payload.index === 1) {
				state.a.push(action.payload.data);
			} else if (!state.b.includes(action.payload.data) && action.payload.index === 2) {
				state.b.push(action.payload.data);
			} else if (!state.c.includes(action.payload.data) && action.payload.index === 3) {
				state.c.push(action.payload.data);
			} else if (!state.c.includes(action.payload.data) && action.payload.index === 3) {
				state.c.push(action.payload.data);
			} else if (!state.d.includes(action.payload.data) && action.payload.index === 4) {
				state.d.push(action.payload.data);
			}
		},
	},
});
const { reducer, actions } = postIDBookSlice;
export const { postIDBook, deleleIDBook } = actions;
export default reducer;
