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
      const isExist = state.items.some(
        (item) => item.productId === action.payload.productId
      );

      if (isExist) {
        const product = state.items.find(
          (item) => item.productId === action.payload.productId
        );
        const count = product.count + 1;
        const totalPrice = product.price * count;
        let attributes = {};

        const keys = Object.keys(product.attributes);
        const values = Object.values(product.attributes);

        values.forEach((value, idx) => {
          const attKey = Object.keys(value);
          attributes = { ...attributes, [keys[idx]]: { [attKey]: count } };
        });

        const updateProduct = {
          ...product,
          count: count,
          totalPrice: totalPrice,
          attributes,
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
    cartCountIncrement: (state, action) => {
      const isExist = state.items.some(
        (item) => item.productId === action.payload
      );

      if (isExist) {
        const products = [...state.items];

        const product = products.find(
          (item) => item.productId === action.payload
        );

        const count = product.count + 1;
        const totalPrice = product.price * count;

        let attributes = {};

        const keys = Object.keys(product.attributes);
        const values = Object.values(product.attributes);

        values.forEach((value, idx) => {
          const attKey = Object.keys(value);
          attributes = { ...attributes, [keys[idx]]: { [attKey]: count } };
        });

        const updateProduct = {
          ...product,
          count: count,
          totalPrice: totalPrice,
          attributes,
        };

        const index = products.findIndex(
          (item) => item.productId === action.payload
        );

        products.splice(index, 1, {
          ...updateProduct,
        });

        return {
          ...state,
          items: [...products],
        };
      }
    },
    cartCountDecrement: (state, action) => {
      const isExist = state.items.some(
        (item) => item.productId === action.payload
      );

      if (isExist) {
        const products = [...state.items];

        const product = products.find(
          (item) => item.productId === action.payload
        );

        const count = product.count - 1;
        const totalPrice = product.price * count;

        let attributes = {};

        const keys = Object.keys(product.attributes);
        const values = Object.values(product.attributes);

        values.forEach((value, idx) => {
          const attKey = Object.keys(value);
          attributes = { ...attributes, [keys[idx]]: { [attKey]: count } };
        });

        const updateProduct = {
          ...product,
          count: count,
          totalPrice: totalPrice,
          attributes,
        };

        const index = products.findIndex(
          (item) => item.productId === action.payload
        );

        products.splice(index, 1, {
          ...updateProduct,
        });

        return {
          ...state,
          items: [...products],
        };
      }
    },

    cartVisible: (state, action) => {
      state.isCartVisible = action.payload;
    },
  },
});

export const {
  addToCart,
  cartVisible,
  removeFromCart,
  cartCountIncrement,
  cartCountDecrement,
} = cartSlice.actions;

export default cartSlice.reducer;
