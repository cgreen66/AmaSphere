// src/store/store.js

import { configureStore } from '@reduxjs/toolkit';
import sessionReducer from './session'; // Adjust the import path as necessary
import productsReducer from './productSlice'; // Adjust the import path as necessary
import cartReducer from './cartSlice'; // Adjust the import path as necessary
import { loadState, saveState } from '../localStorage'; // Adjust the import path as necessary
import throttle from 'lodash/throttle';

const saveCartState = state => {
  saveState({
    cart: state.cart,
  });
};

const preloadedState = loadState();

const setupStore = async () => {
  const middlewares = [];

  if (process.env.NODE_ENV === 'development') {
    const { default: logger } = await import('redux-logger');
    middlewares.push(logger);
  }

  const store = configureStore({
    reducer: {
      session: sessionReducer,
      products: productsReducer,
      cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
    preloadedState,
  });

  store.subscribe(throttle(() => {
    saveCartState(store.getState());
}, 1000));

  return store;
};

// Since setupStore is asynchronous, you may need to adjust how you export and use the store.
// One approach is to export a promise and await it where you need the store.
const storePromise = setupStore();

export default storePromise;
