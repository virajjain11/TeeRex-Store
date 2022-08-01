const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const fetchProduct = createAsyncThunk("product/fetch", async () => {
  const res = await fetch(
    " https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
  );
  const data = await res.json();
  //   console.log(res);
  return data;
});
const ProductSlice = createSlice({
  name: "product",
  initialState: {
    store: {},
    cart: {},
  },
  reducers: {
    addColorFilter: (state, { payload }) => {
      // console.log(payload);
      // console.log(state.store);
      // state.cart = [payload];
      // console.log();
    },
  },
  extraReducers: {
    [fetchProduct.fulfilled]: (state, { payload }) => {
      return { ...state, store: payload };
    },
  },
});

export const { addColorFilter } = ProductSlice.actions;
export default ProductSlice.reducer;
