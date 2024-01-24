import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateItemQuantity, removeItemFromCart } from './cartSlice';
import './CartPage.css';
import ducati from '/Users/christopher/AmaSphere/public/images/PANIGALEV4RRSIDE_2000x.webp';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart || []);
  const dispatch = useDispatch();

  const handleUpdateQuantity = (itemId, newQuantity) => {
    dispatch(updateItemQuantity({ itemId, quantity: newQuantity }));
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItemFromCart(itemId));
  };

  const handleCheckout = () => {
    console.log('Checkout button clicked');
  };

  const totalCost = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="cart-items-index-background">
      <div className="cart-items-index-container">
        <div className="cart-items-index-div-inner">
          <h2 className="header">Shopping Cart</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div>
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={ducati} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h3 className="text-lg font-medium">{item.name}</h3>
                    <div className="cart-item-info">
                      <div className="cart-item-price">
                        Price: ${item.price.toFixed(2)}
                      </div>
                      <div className="cart-item-quantity">
                        Quantity:
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) =>
                            handleUpdateQuantity(item.id, parseInt(e.target.value, 10))
                          }
                          className="form-input"
                        />
                      </div>

                    </div>
                    <button className="remove-button" onClick={() => handleRemoveItem(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="checkout-div">
          <div className="subtotal-checkout">
            <h1>Subtotal: ${totalCost.toFixed(2)}</h1>
          </div>
          <Link to="/thankyou">
            <button className="checkout-button" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
