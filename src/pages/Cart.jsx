import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, checkout } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    checkout();
    navigate("/order-confirmation");
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div className="cart-item-info">
                <span>{item.title}</span>
                <p>${item.price}</p>
                <div className="cart-item-details">
                  <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <h3>{item.quantity}</h3>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  <button onClick={() => removeFromCart(index)}>Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {cart.length > 0 && <button onClick={handleCheckout}>Checkout</button>}
    </div>
  );
};

export default Cart;
