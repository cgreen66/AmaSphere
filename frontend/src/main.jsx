// src/main.jsx or wherever your application entry point is

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import storePromise from './store/store'; // Ensure this path is correct
import { restoreCSRF, csrfFetch } from './store/csrf';

// Wait for the store to be configured before rendering the app
storePromise.then((store) => {
  if (import.meta.env.MODE !== "production") {
    restoreCSRF();
    window.store = store;
    window.csrfFetch = csrfFetch;
  }

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
});
