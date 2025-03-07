import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, checkout } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    checkout();
    navigate("/order-confirmation");
  };

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <h3>{item.title}</h3>
              <p>${item.price}</p>
              <button onClick={() => updateQuantity(item.id, -1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, 1)}>+</button>
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && <button onClick={handleCheckout}>Checkout</button>}
    </div>
  );
};

export default Cart;
