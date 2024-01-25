import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RouterProvider, createBrowserRouter, Outlet, useLocation } from 'react-router-dom';
import LoginForm from './components/session/LoginForm';
import SignupForm from './components/session/SignupForm';
import Header from './components/Navigation/header';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail'; 
import * as sessionActions from './store/session';
import HomePage from './components/HomePage';
import CartPage from './store/cartpage';
import ThankYouPage from './store/thankyoupage';
import Header1 from './components/Navigation/header1';
import SecondaryNav from './components/Navigation/secondarynav';
import BrandProducts from './components/Navigation/Brandproducts';

function Layout() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation(); 

  useEffect(() => {
    dispatch(sessionActions.restoreSession()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      {location.pathname !== '/login' && location.pathname !== '/signup' && <Header/>}
      {isLoaded && <Outlet />}
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
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
      {
        path: 'cart', 
        element: <CartPage />
      },
      {
        path: 'thankyou', 
        element: <ThankYouPage />
      },
      {
        path: 'brand/:brandName',
        element: <BrandProducts />,
        loader: async ({ params }) => {
          return fetch(`/api/products/brand/${params.brandName}`)
            .then(res => res.json());
        }
      },
  
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
