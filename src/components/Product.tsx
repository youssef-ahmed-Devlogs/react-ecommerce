import type { ProductType } from "@/types/product";
import { useAppDispatch } from "../redux/hooks";

const Product = ({ product }: { product: ProductType }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="card">
      <img
        src={product.image}
        className="card-img-top object-fit-contain"
        alt={product.title}
      />
      <div className="card-body">
        <h4 className="card-title">
          {product.title.length > 20
            ? product.title.slice(0, 20) + "..."
            : product.title}
        </h4>
        <p className="card-text">$ {product.price}</p>
        <p className="card-text">
          {product.description.length > 90
            ? product.description.slice(0, 90) + "..."
            : product.description}
        </p>

        <button className="btn btn-primary">Add To Cart</button>
      </div>
    </div>
  );
};

export default Product;
