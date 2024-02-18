// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('cart')) || [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        state.push(newItem);
      }
    },
    removeItemFromCart: (state, action) => {
      const itemId = action.payload;
      const index = state.findIndex((item) => item.id === itemId);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    updateItemQuantity: (state, action) => {
      const { itemId, quantity } = action.payload;
      const item = state.find((item) => item.id === itemId);
      if (item) {
        item.quantity = quantity;
      }
    },
    resetCart: () => [],
    setCartItems: (state, action) => [...action.payload],
  },
});


export const { addItemToCart, removeItemFromCart, updateItemQuantity, resetCart, setCartItems } = cartSlice.actions;
export default cartSlice.reducer;
