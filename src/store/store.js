import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./ProductSlice";
export const store = configureStore({
  reducer: {
    product: Reducer,
  },
});
