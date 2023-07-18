import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    {
      product: {
        id: 11,
        name: "Expresso tradicional",
        tags: ["tradicional"],
        description: "O tradicional café feito com água quente e grãos moídos",
        value: "9,90",
        image: "./src/assets/images/coffee.png",
      },
      quantity: 2,
    },
  ],
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
