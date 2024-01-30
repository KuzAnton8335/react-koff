import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/auth.slice";
import categoriesReducer from "./categories/categories.slice";
import favoriteReducer from "./favorite/favorite.js";
import { apiTokenErrorMiddleware } from "./middleware";
import productReducer from "./product/product.slice";
import productsReducer from "./products/products.slice";
import cartReducer from "./cart/cart.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    categories: categoriesReducer,
    products: productsReducer,
    product: productReducer,
    favorite: favoriteReducer,
	 cart: cartReducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(apiTokenErrorMiddleware),
});
