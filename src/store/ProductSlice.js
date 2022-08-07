const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const fetchProduct = createAsyncThunk("product/fetch", async () => {
  const res = await fetch(
    " https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
  );
  const data = await res.json();
  return data;
});
const ProductSlice = createSlice({
  name: "product",
  initialState: {
    referenceStore: {},
    store: {},
    filteredProduc: {},
    cart: {},
  },
  reducers: {
    addColorFilter: (state, { payload }) => {
      state.store = payload;
    },

    filterItemFromCart: (state, { payload }) => {
      state.cart = payload;
    },
  },
  extraReducers: {
    [fetchProduct.fulfilled]: (state, { payload }) => {
      return { ...state, store: payload, referenceStore: payload };
    },
  },
});

export const { addColorFilter, filterItemFromCart } = ProductSlice.actions;
export default ProductSlice.reducer;
