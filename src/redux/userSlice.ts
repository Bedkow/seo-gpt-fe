//userSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import checkEnv from "../helpers/checkEnv";
import axios from "axios";
// Define the async thunk for fetching user data

interface InitialState {
	data: Array<{}> | null;
	loading: boolean;
	error: string | undefined;
}

const initialState: InitialState = {
	data: null,
	loading: false,
	error: undefined,
};

export const fetchUserData = createAsyncThunk(
	"user/fetchUserData",
	async () => {
		let apiURL = checkEnv();

		const response = await axios.get(apiURL + "users");
		const userData = await response.data;
		return userData;
	}
);
// Define the user slice
export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUserData.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchUserData.fulfilled, (state, action) => {
				state.loading = false;
				state.data = action.payload;
			})
			.addCase(fetchUserData.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});
export default userSlice.reducer;
