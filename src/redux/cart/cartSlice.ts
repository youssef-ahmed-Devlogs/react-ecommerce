import { createSlice } from "@reduxjs/toolkit";
import type { CartType } from "@/types/cart";
import { fetchCart } from "./cartThunks";

const initialState: {
  cart: CartType;
  loading: boolean;
  error: string;
} = {
  cart: {} as CartType,
  loading: false,
  error: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Unexpected Error";
      });
  },
});

export const {} = cartSlice.actions;
export default cartSlice.reducer;
