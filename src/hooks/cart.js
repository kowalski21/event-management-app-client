import { useState } from "react";

const useCart = (defaultArray = []) => {
  const [cart, setCart] = useState(defaultArray);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, qty: cartItem.qty + item.qty } : cartItem
        );
      } else {
        return [...prevCart, item];
      }
    });
  };
  const prepCart = () => {
    // setCart((prevCart) => {
    //   const filteredCart = prevCart.filter((cartItem) => cartItem.qty > 0);
    //   return filteredCart;
    // });
    let tmp = cart.filter((cartItem) => cartItem.qty > 0);
    return [...tmp];
  };
  const updateCart = (id, qty) => {
    setCart((prevCart) => {
      return prevCart.map((cartItem) => (cartItem.id === id ? { ...cartItem, qty } : cartItem));
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== id));
  };
  const calculateCartTotal = () => {
    return cart.reduce((total, cartItem) => total + cartItem.qty * cartItem.price, 0).toFixed(2);
  };
  return {
    cart,
    addToCart,
    updateCart,
    removeFromCart,
    prepCart,
    calculateCartTotal,
  };
};

export default useCart;
