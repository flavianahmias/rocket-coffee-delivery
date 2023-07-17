import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, action) => {
      const index = state.value.findIndex(
        (v) => v.product.id === action.payload.product.id
      );

      if (index === -1) {
        state.value.push(action.payload);
      } else {
        state.value[index].quantity += action.payload.quantity;
      }
    },
    decrement: (state) => {},
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement } = cartSlice.actions;

export default cartSlice.reducer;
