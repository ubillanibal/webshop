import { Link } from "react-router-dom";

function OrderConfirmation() {
  return (
    <div>
      <h1>Welcome to the Shop</h1>
      <Link to="/cart">Go to Cart</Link>
    </div>
  );
}

export default OrderConfirmation;
