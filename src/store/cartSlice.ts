import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState } from '../types';

const initialState: CartState = {
  items: [],
  count: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<number>) => {
      state.items.push(action.payload);
      state.count += 1;
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;