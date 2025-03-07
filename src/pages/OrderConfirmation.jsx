import "./OrderConfirmation.css";

//TODO: Turn this into a popup modal that appears after the user has successfully placed an order
const OrderConfirmation = () => {
  return (
    <div className="order-confirmation">
      <h1>Thank you for your purchase!</h1>
      <p>Your order has been placed successfully.</p>
    </div>
  );
};

export default OrderConfirmation;
