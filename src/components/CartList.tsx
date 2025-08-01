import { useAppSelector } from "../redux/hooks";
import CartItem from "./CartItem";

const CartList = () => {
  const cart = useAppSelector((state) => state.cart.data);

  return (
    <div className="row mt-5">
      {cart.map((cartItem) => (
        <div className="col-6" key={cartItem.id}>
          <CartItem cartItem={cartItem} />
        </div>
      ))}
    </div>
  );
};

export default CartList;
