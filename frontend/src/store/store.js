import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import sessionReducer from './session';
import productsReducer from './productSlice';
import cartReducer from './cartSlice';
import { loadState, saveState } from '../localStorage'; 

const logger = createLogger({
  collapsed: true,
  duration: true,
});

const configureAppStore = (preloadedState) => {
  const middleware = [thunk];

  if (import.meta.env.MODE !== 'production') {
    middleware.push(logger);
  }

  const persistedState = loadState(); 

  const store = configureStore({
    reducer: {
      session: sessionReducer,
      products: productsReducer,
      cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
    preloadedState: persistedState, 
  });

  store.subscribe(() => {
    saveState({
      cart: store.getState().cart, 
    });
  });

  return store;
};

export default configureAppStore;
