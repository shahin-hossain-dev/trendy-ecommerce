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
      // let count = product.count || 1;
      // let totalPrice = product.price;
      const isExist = state.items.some(
        (item) => item.productId === action.payload.productId
      );

      if (isExist) {
        const product = state.items.find(
          (item) => item.productId === action.payload.productId
        );
        const count = product.count + 1;
        const totalPrice = product.price * count;

        const updateProduct = {
          ...product,
          count: count,
          totalPrice: totalPrice,
        };

        const remainingProduct = state.items.filter(
          (item) => item.productId !== action.payload.productId
        );

        return {
          ...state,
          items: [...remainingProduct, updateProduct],
        };
      }

      return {
        ...state,
        items: [...state.items, action.payload],
      };
    },

    removeFromCart: (state, action) => {
      const remainingProduct = state.items.filter(
        (item) => item.productId !== action.payload
      );

      return {
        ...state,
        items: [...remainingProduct],
      };
    },

    cartVisible: (state, action) => {
      state.isCartVisible = action.payload;
    },
  },
});

export const { addToCart, cartVisible, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
