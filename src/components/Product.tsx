import type { ProductType } from "@/types/product";
import { addToCart } from "../redux/slices/cartSlice";
import { useAppDispatch } from "../redux/hooks";

const Product = ({ product }: { product: ProductType }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">{product.name}</h4>
        <p className="card-text">$ {product.price}</p>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
          explicabo nesciunt vel sunt sint, porro quos quia, odio quae aliquam,
          architecto veniam nam. Commodi optio, consectetur eos alias maxime
          magnam?
        </p>

        <button
          className="btn btn-primary"
          onClick={() => dispatch(addToCart(product))}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
