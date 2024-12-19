import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addTocart, fetchCartItem, RemoveFromcart, updatecart } from './CartAPI';

const initialState = {
  cart: [],
  status: 'idle',
};

export const addTocartAsync = createAsyncThunk(
  'cart/addTocart',
  async (cartProduct) => {
    const response = await addTocart(cartProduct);
    return response.data;
  }
);
export const updatecartAsync = createAsyncThunk(
  'cart/updatecart',
  async (update) => {
    const response = await updatecart(update);
    return response.data;
  }
);

export const fetchCartItemAsync = createAsyncThunk(
  'cart/fetchCartItem',
  async () => {
    const response = await fetchCartItem();
    return response.data;
  }
)
export const RemoveFromcartAsync = createAsyncThunk(
  'cart/RemoveFromcart',
  async (remove) => {
    const response = await RemoveFromcart(remove);
    return response.data;
  }
)

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
   
  },
  extraReducers: (builder) => {
    builder
    .addCase(addTocartAsync.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(addTocartAsync.fulfilled, (state, action) => {
      state.status = 'idle';
      state.cart = action.payload;
    })
      .addCase(fetchCartItemAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCartItemAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.cart = action.payload;
      })
      .addCase(updatecartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updatecartAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index = state.cart.findIndex((item)=> item.id === action.payload.id)
        state.cart[index] = action.payload;
      })
      .addCase(RemoveFromcartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(RemoveFromcartAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index = state.cart.findIndex((item) => item.id === action.payload.id)
        if (index !== -1) {
          state.cart.splice(index, 1)
        }
      });
  },
});

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const selectCart = (state) => state.cart.cart;
const cartReducer = cartSlice.reducer;

export default cartReducer;
