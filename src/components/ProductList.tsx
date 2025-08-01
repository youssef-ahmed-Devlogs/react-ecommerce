import { useAppSelector } from "../redux/hooks";
import Product from "./Product";

const ProductList = () => {
  const products = useAppSelector((state) => state.products.data);

  return (
    <div className="row mt-5">
      {products.map((product) => (
        <div className="col-4" key={product.id}>
          <Product product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
