import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as productsAPI from "api/products";

const initialState = {
  data: null,
  loading: false,
};

const getProducts = createAsyncThunk("products/get", async () => {
  try {
    const res = await productsAPI.getProducts();
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    resetState: () => {
      return initialState;
    },
  },
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.loading = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [getProducts.rejected]: (state) => {
      state.loading = false;
    },
  },
});

const { resetState } = productsSlice.actions;

export default productsSlice.reducer;

export { resetState, getProducts };
