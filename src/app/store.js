import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/products/ProductSlice';
import cartReducer from '../features/Cart/cartSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer
  },
});
