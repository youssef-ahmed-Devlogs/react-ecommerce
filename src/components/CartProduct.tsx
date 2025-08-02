import type { CartProductType } from "@/types/cart";

const CartProduct = ({ product }: { product: CartProductType }) => {
  return (
    <div className="card mb-4">
      <img
        src={product.image}
        className="card-img-top cart-image object-fit-contain"
        alt={product.title}
      />
      <div className="card-body">
        <h6 className="card-title">{product.title}</h6>
        <p className="card-text">$ {product.price}</p>
        <p className="card-text">quantity: {product.quantity}</p>

        <button className="btn btn-sm btn-danger">Remove</button>
      </div>
    </div>
  );
};

export default CartProduct;
