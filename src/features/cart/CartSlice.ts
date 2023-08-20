import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';

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

export const cartSlice: Slice<CartState> = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      const newItem = action.payload;
      return {
        ...state,
        items: [...state.items, newItem],
        total: state.total + newItem.price,
      };
    },
    removeItem: (state, action: PayloadAction<Item>) => {
      const removedItem = action.payload;
      const newItems = state.items.filter((item) => item.id !== removedItem.id);
      return {
        ...state,
        items: newItems,
        total: state.total - removedItem.price,
      };
    },
    clearCart: (state) => {
      return {
        ...state,
        items: [],
        total: 0,
      };
    },
  },
});
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
