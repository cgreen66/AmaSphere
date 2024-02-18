import { RECEIVE_CARTS, RECEIVE_CART, REMOVE_CART } from './cartActions';

const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_CARTS:
      return [...action.carts];
    case RECEIVE_CART:
      return state.map((cart) => cart.id === action.cart.id ? action.cart : cart);
    case REMOVE_CART:
      return state.filter((cart) => cart.id !== action.cartId);
    default:
      return state;
  }
};

export default cartReducer;
