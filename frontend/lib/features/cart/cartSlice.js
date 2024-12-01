import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
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
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
