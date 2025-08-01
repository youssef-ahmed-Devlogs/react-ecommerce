import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { CartItemType } from "@/types/cart-item";
import type { ProductType } from "@/types/product";
import type { RootState } from "../store";

const initialState:{data: CartItemType[]} = {
  data: [{ id: 1, productId: 2, name: "Mac Book 2025", price: 4899 }],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductType>) => {
      const isProductInCart = state.data.some(
        (item) => item.productId == action.payload.id
      );

      if (!isProductInCart) {
        const id =
          state.data.length > 0 ? state.data[state.data.length - 1].id + 1 : 0;

        state.data = [
          ...state.data,
          {
            id,
            productId: action.payload.id,
            name: action.payload.name,
            price: action.payload.price,
          },
        ];
      }
    },
    removeFromCart: (state, action: PayloadAction<{productId:number}>) => {
      const newCart = state.data.filter(
        (item) => item.productId !== action.payload.productId
      );
      state.data = newCart;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
