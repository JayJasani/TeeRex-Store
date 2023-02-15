import { combineReducers } from "@reduxjs/toolkit";
import productsReducer from "./products";
import cartReducer from "./cart";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { persistReducer } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";

const encryptor = encryptTransform({
  secretKey: process.env.REACT_APP_SECRET_KEY,
  onError: function (error) {
    // Handle the error.
    console.error("encryptTransform", error);
  },
});
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["products"],
  transforms: [encryptor],
};

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});
export default persistReducer(persistConfig, rootReducer);
