import { createSlice } from '@reduxjs/toolkit';

const LoginSlice = createSlice({
	name: 'Login',
	initialState: [],

	reducers: {
		login: (state, action) => {
			state.push(action.payload);
		},
		logout: (state, action) => {
			state.pop();
		},
	},
});
const { reducer, actions } = LoginSlice;
export const { login, logout } = actions;
export default reducer;
