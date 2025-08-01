import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { ProductType } from "@/types/product";


const initialState:{data: ProductType[]} = {
  data: [
    { id: 1, name: "I Phone", price: 2399 },
    { id: 2, name: "Mac Book 2025", price: 4899 },
    { id: 3, name: "Samsung A55 5g", price: 4899 },
  ],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action:PayloadAction<ProductType>) => {
      state.data.push(action.payload);
    },
    removeProduct: (state, action:PayloadAction<number>) => {
      state.data = state.data.filter(product => product.id !== action.payload);
    },
  },
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
