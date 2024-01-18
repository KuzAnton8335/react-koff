import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../const.js";

export const fetchProducts = createAsyncThunk(
	"products/fetchProducts",
	async (_, thunkAPI) => {
		const state = thunkAPI.getState();
		const token = state.auth.accessToken;

		const response = await fetch(
			`${API_URL}api/products`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			},
		);

		if (!response.ok) {
			throw new Error("Не удалось получить продукты!");
		}

		return response.json();
	}
);

const initialState = {
	data: [],
	loading: false,
	error: null,
};

export const productSlice = createSlice({
	name: "products",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProducts.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.data = action.payload;
				state.loading = false;
				state.error = null;
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});

export default productSlice.reducer;