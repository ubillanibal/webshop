import { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  function updateQuantity(id, amount) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  }

  const checkout = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  //TODO: Using context goes a bit over my head, while I solved it, I made use HEAVELY of cGPT, so I need to work on this some more
  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, checkout }}
    >
      {children}
    </CartContext.Provider>
  );
};

//useCat reports a warning about Fast refresh that I don't know how to solve
export const useCart = () => {
  return useContext(CartContext);
};
