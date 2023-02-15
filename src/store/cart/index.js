import { createSlice } from "@reduxjs/toolkit/dist";

const initialState = {
  data: [],
  loading: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    resetState: () => {
      return initialState;
    },
  },
  extraReducers: {},
});

const { resetState } = cartSlice.actions;

export default cartSlice.reducer;

export { resetState };
