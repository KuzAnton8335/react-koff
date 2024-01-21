import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/auth.slice";
import categoriesReducer from "./categories/categories.slice";
import { apiTokenErrorMiddleware } from "./middleware";
import productReducer from "./product/product.slice";
import productsReducer from "./products/products.slice";

export const store = configureStore({
	reducer: {
		auth: authReducer,
		categories: categoriesReducer,
		products: productsReducer,
		product: productReducer,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(apiTokenErrorMiddleware)
	}
});
