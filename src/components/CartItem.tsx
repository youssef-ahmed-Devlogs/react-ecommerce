import { removeFromCart } from "../redux/slices/cartSlice";
import type { CartItemType } from "@/types/cart-item";
import { useAppDispatch } from "../redux/hooks";

const CartItem = ({ cartItem }: { cartItem: CartItemType }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h6 className="card-title">{cartItem.name}</h6>
        <p className="card-text">$ {cartItem.price}</p>
        <button
          className="btn btn-sm btn-danger"
          onClick={() =>
            dispatch(
              removeFromCart({
                productId: cartItem.productId,
              })
            )
          }
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
