import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RouterProvider, createBrowserRouter, Outlet, useLocation } from 'react-router-dom';
import LoginForm from './components/session/LoginForm';
import SignupForm from './components/session/SignupForm';
import Header from './components/Navigation/header';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail'; // Import the ProductDetail component
import * as sessionActions from './store/session';

function Layout() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation(); 

  useEffect(() => {
    dispatch(sessionActions.restoreSession()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      {location.pathname !== '/login' && location.pathname !== '/signup' && <Header />}
      {isLoaded && <Outlet />}
    </>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <h1>Home Page</h1>
      },
      {
        path: 'login',
        element: <LoginForm />
      },
      {
        path: 'signup',
        element: <SignupForm />
      },
      {
        path: 'products',
        element: <ProductList />
      },
      {
        path: 'products/:productId', 
        element: <ProductDetail />
      },
  
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
