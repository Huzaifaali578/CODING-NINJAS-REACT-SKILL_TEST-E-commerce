import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addNewProduct, fetchProduct, updateProduct, deleteProduct } from './ProductAPI';

const initialState = {
  products: [],
  status: 'idle',
  selectedProduct: null,
  productDetail : null
};

export const fetchProductAsync = createAsyncThunk(
  'product/fetchProduct',
  async () => {
    const response = await fetchProduct();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const addNewProductAsync = createAsyncThunk(
  'product/addNewProduct',
  async (product) => {
    const response = await addNewProduct(product);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const updateProductAsync = createAsyncThunk(
  'product/updateProduct',
  async (product) => {
    const response = await updateProduct(product);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const deleteProductAsync = createAsyncThunk(
  'product/deleteProduct',
  async (product) => {
    const response = await deleteProduct(product);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);



export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    // deleteProduct: (state, action) => {
    //   const index = state.products.findIndex((product) => product.id === action.payload)
    //   if (index !== -1) { 
    //     state.products.splice(index, 1)
    //   } else {
    //     console.warn("Product not found: ", action.payload);
    //   }
    // },
    editSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload
        },
    productDetailById: (state, action) => {
      state.productDetail = action.payload
        },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      })
      .addCase(addNewProductAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addNewProductAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products.push(action.payload)
      })
      .addCase(updateProductAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateProductAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index = state.products.findIndex((product) => product.id === action.payload.id)
        state.products[index] = action.payload
      })
      .addCase(deleteProductAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteProductAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index = state.products.findIndex((product) => product.id === action.payload.id)
        if (index !== -1) { 
          state.products.splice(index, 1)
        } else {
          console.warn("Product not found: ", action.payload);
        }
      });
  },
});

export const { editSelectedProduct, productDetailById } = productSlice.actions;
export const selectProduct = (state) => state.product.products;
export const selectedProductSelector = (state) => state.product.selectedProduct;
export const productDetailSelector = (state) => state.product.productDetail;
const productReducer = productSlice.reducer;
export default productReducer;
