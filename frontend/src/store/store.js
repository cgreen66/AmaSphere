import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import sessionReducer from './session';
import productsReducer from './productSlice';

const logger = createLogger({
  collapsed: true,
  duration: true,
});

const configureAppStore = (preloadedState) => {
  const middleware = [thunk];

  if (import.meta.env.MODE !== 'production') {
    middleware.push(logger);
  }

  return configureStore({
    reducer: {
      session: sessionReducer,
      products: productsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
    preloadedState,
  });
};

export default configureAppStore;
