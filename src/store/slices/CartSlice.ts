import { createSlice } from '@reduxjs/toolkit';

type Item = {
  id: string;
  name: string;
  price: number;
};

type CartState = {
  items: Item[];
  total: number;
};

const initialState: CartState = {
  items: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      state.items = [...state.items, newItem];
      state.total += newItem.price;
    },
    removeItem: (state, action) => {
      const removedItem = action.payload;
      const newItems = state.items.filter((item) => item.id !== removedItem.id);
      state.items = newItems;
      state.total -= removedItem.price;
      console.log(state.items, state.total);
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
});
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
