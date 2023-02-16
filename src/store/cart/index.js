import { createSlice } from "@reduxjs/toolkit/dist";
import { toast } from "react-toastify";

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
    addToCart: (state, action) => {
      const index = state.data?.findIndex(
        (_el) => _el.id === action.payload.id
      );
      if (index < 0) {
        state.data = [action.payload.product, ...state.data];
        toast.success("Product added to the cart");
      } else {
        toast.warning("Prodcut is alredy present into the cart");
      }
    },
  },
  extraReducers: {},
});

const { resetState, addToCart } = cartSlice.actions;

export default cartSlice.reducer;

export { resetState, addToCart };
