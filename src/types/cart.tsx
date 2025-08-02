import type { ProductType } from "./product";

export type CartProductType = ProductType & {
  quantity: number;
};

export type CartType = {
  id: number;
  user_id: number;
  date: Date | string;
  products: CartProductType[];
};
