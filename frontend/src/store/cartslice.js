// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
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
      const itemIndex = state.findIndex((item) => item.id === itemId);
      if (itemIndex !== -1) {
        state.splice(itemIndex, 1);
      }
    },
    updateItemQuantity: (state, action) => {
      const { itemId, quantity } = action.payload;
      const item = state.find((item) => item.id === itemId);
      if (item) {
        item.quantity = quantity;
      }
    },
    resetCart: () => {
      return []; // Resets the state to an empty array
    },
  },
});

export const { addItemToCart, removeItemFromCart, updateItemQuantity, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
