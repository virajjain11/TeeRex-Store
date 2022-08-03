const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const tmpData = [
  {
    color: "Black",
    currency: "INR",
    gender: "Men",
    id: 1,
    imageURL:
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
    name: "Black Polo",
    price: 250,
    quantity: 3,
    type: "Polo",
  },
  {
    color: "Blue",
    currency: "INR",
    gender: "Women",
    id: 18,
    imageURL:
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/round-neck-tshirts.png",
    name: "Blue Round",
    price: 300,
    quantity: 3,
    type: "Basic",
  },
  {
    color: "Blue",
    currency: "INR",
    gender: "Women",
    id: 4,
    imageURL:
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/round-neck-tshirts.png",
    name: "Blue Round",
    price: 300,
    quantity: 3,
    type: "Basic",
  },
  {
    color: "Blue",
    currency: "INR",
    gender: "Women",
    id: 3,
    imageURL:
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/round-neck-tshirts.png",
    name: "Blue Round",
    price: 300,
    quantity: 3,
    type: "Basic",
  },
  {
    color: "Blue",
    currency: "INR",
    gender: "Women",
    id: 2,
    imageURL:
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/round-neck-tshirts.png",
    name: "Blue Round",
    price: 300,
    quantity: 3,
    type: "Basic",
  },
];

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
    cart: tmpData,
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
    removeItemFromCart: (state, { payload }) => {
      state.cart = payload;
    },
    addItemToStore: (state, { payload }) => {
      // state.store = payload;
      // return state.store.push(payload);
      // return { ...state, store: payload };
    },
  },
  extraReducers: {
    [fetchProduct.fulfilled]: (state, { payload }) => {
      return { ...state, store: payload };
    },
  },
});

export const { addColorFilter, removeItemFromCart, addItemToStore } =
  ProductSlice.actions;
export default ProductSlice.reducer;
