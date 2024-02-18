import { csrfFetch } from './csrf'; // Adjust the import path as necessary

export const RECEIVE_CARTS = 'cart/RECEIVE_CARTS';
export const RECEIVE_CART = 'cart/RECEIVE_CART';
export const REMOVE_CART = 'cart/REMOVE_CART';

// Action creators
const receiveCarts = (carts) => ({
  type: RECEIVE_CARTS,
  carts,
});

const receiveCart = (cart) => ({
  type: RECEIVE_CART,
  cart,
});

const removeCart = (cartId) => ({
  type: REMOVE_CART,
  cartId,
});

// Thunks
export const fetchCarts = () => async (dispatch) => {
  const response = await csrfFetch(`/api/carts`);
  if (response.ok) {
    const carts = await response.json();
    dispatch(receiveCarts(carts));
  }
};

export const createCart = (cartItem) => async (dispatch) => {
  const response = await csrfFetch(`/api/carts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cartItem),
  });
  if (response.ok) {
    const cart = await response.json();
    dispatch(receiveCart(cart));
  }
};

export const updateCart = (cartId, cartItem) => async (dispatch) => {
  const response = await csrfFetch(`/api/carts/${cartId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cartItem),
  });
  if (response.ok) {
    const cart = await response.json();
    dispatch(receiveCart(cart));
  }
};

export const deleteCart = (cartId) => async (dispatch) => {
  await csrfFetch(`/api/carts/${cartId}`, {
    method: 'DELETE',
  });
  dispatch(removeCart(cartId));
};
