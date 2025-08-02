import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import Product from "./Product";
import { fetchProducts } from "../redux/products/productThunks";

const ProductList = () => {
  const { products, loading, error } = useAppSelector(
    (state) => state.products
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="row mt-5">
      {products.map((product) => (
        <div className="col-4 mb-4" key={product.id}>
          <Product product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
