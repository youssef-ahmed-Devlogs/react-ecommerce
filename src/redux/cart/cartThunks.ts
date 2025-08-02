import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchProductById = async (id: number) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  const data = await res.json();
  return data;
};

export const fetchCart = createAsyncThunk("cart/fetch", async (_, thunkAPI) => {
  try {
    const response = await fetch("https://fakestoreapi.com/carts/1");
    if (!response.ok) throw new Error("An error happens while loading data");
    const cart = await response.json();

    const productsWithDetails = await Promise.all(
      cart.products.map(
        async (item: { productId: number; quantity: number }) => {
          const productData = await fetchProductById(item.productId);
          return {
            ...productData,
            quantity: item.quantity,
          };
        }
      )
    );

    cart.products = productsWithDetails;
    return cart;
  } catch (error) {
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    }
    return thunkAPI.rejectWithValue("An unknown error occurred");
  }
});
