const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  products: [],
  qnt: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existing = state.products.find(
        (product) => product._id === action.payload._id
      );

      if (existing) {
        existing.quantity = existing?.quantity + 1;
        state.qnt += 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
        state.qnt += 1;
      }

      state.total += action.payload.price;
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
