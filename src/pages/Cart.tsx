import CartList from "../components/CartList";

const Cart = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div>
            <h2>Cart Items</h2>

            <CartList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
