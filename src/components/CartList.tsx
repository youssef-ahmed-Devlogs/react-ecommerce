import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchCart } from "../redux/cart/cartThunks";
import CartProduct from "./CartProduct";
import type { CartProductType } from "@/types/cart";

const CartList = () => {
  const { cart, loading, error } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="row mt-5">
      {cart?.products?.map((product, index) => (
        <div className="col-6" key={index}>
          <CartProduct product={product} />
        </div>
      ))}
    </div>
  );
};

export default CartList;
