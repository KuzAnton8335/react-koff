import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../const.js";

export const fetchProduct = createAsyncThunk(
	"products/fetchProduct",
	async (id, thunkAPI) => {
		const state = thunkAPI.getState();
		const token = state.auth.accessToken;

		const response = await fetch(`${API_URL}api/product/${id}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		if (!response.ok) {
			if (response.status === 401) {
				return thunkAPI.rejectWithValue({
					status: response.status,
					error: "Не удалось загрузить товар!"
				})
			}
			throw new Error("Не удалось загрузить товар!");
		}

		return response.json();
	},
);

const initialState = {
	data: null,
	loading: false,
	error: null,
};

export const productSlice = createSlice({
	name: "product",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProduct.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchProduct.fulfilled, (state, action) => {
				state.data = action.payload;
				state.loading = false;
				state.error = null;
			})
			.addCase(fetchProduct.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});

export default productSlice.reducer;
