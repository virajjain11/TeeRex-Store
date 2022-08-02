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
    filteredProduc: {},
    cart: {},
  },
  reducers: {
    addColorFilter: (state, { payload }) => {
      // console.log(payload); //{color: Array(3), gender: Array(1), dressType: Array(1)}
      // state.cart = "aaaa";
      // console.log(state.store);
      // state.cart = [payload];
      // let newFilter = state.store.map((ele, idx) =>
      //   payload.color.includes(ele.color)
      // );
      // console.log(newFilter);
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
