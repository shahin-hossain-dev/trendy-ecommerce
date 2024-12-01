import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  isCartVisible: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log("Add action called with payload:", action.payload);
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    },

    cartVisible: (state, action) => {
      state.isCartVisible = action.payload;
    },
  },
});

export const { addToCart, cartVisible } = cartSlice.actions;

export default cartSlice.reducer;
