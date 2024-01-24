// MiniCart.js
import React from 'react';
import { useSelector } from 'react-redux';

const MiniCart = () => {
  const cartItems = useSelector((state) => state.cart);

  return (
    <div className="mini-cart">
      <div className="cart-icon"> </div>
      <div className="cart-count">{cartItems.length}</div>
    </div>
  );
};

export default MiniCart;
