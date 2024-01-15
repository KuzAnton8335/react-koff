import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCategories = createAsyncThunk(
	"products/fetchCategories",
	async (_, thunkAPI) => {
		const state = thunkAPI.getState();
		const token = state.auth.accessToken;

		const response = await fetch(
			"https://koff-api.vercel.app/api/products",
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			},
		);

		if (!response.ok) {
			throw new Error("Не удалось получить продукт!");
		}

		return response.json();
	}
);

const initialState = {
	data: [],
	loading: false,
	error: null,
};

const productSlice = createSlice({
	name: "products",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCategories.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchCategories.fulfilled, (state, action) => {
				state.data = action.payload;
				state.loading = false;
				state.error = null;
			})
			.addCase(fetchCategories.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});

export default productSlice.reducer;