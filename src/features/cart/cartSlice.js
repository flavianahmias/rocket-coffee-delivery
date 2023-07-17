import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value.push(action.payload);
    },
    decrement: (state) => {},
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement } = cartSlice.actions;

export default cartSlice.reducer;
