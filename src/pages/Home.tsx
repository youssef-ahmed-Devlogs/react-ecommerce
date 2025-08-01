import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2>Products</h2>
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default Home;
