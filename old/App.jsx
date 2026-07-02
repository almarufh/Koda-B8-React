import { 
  RouterProvider, 
  createBrowserRouter, 
  Navigate 
} from 'react-router';
import React from 'react';
import CartContext from './contexts/CartContext.jsx';
import AuthLayout from './pages/auth/AuthLayout.jsx';
import Login from './pages/auth/Login.jsx';
import Register from './pages/auth/Register.jsx';
import Forgot from './pages/auth/Forgot.jsx';
import LandingPage from './pages/main/LandingPage.jsx';
import MainLayout from './pages/main/MainLayout.jsx';
import DetailPage from './pages/main/DetailPage.jsx';
import CartPage from './pages/main/Cart.jsx';

const router = createBrowserRouter([
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="login" replace />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'forgot-password',
        element: <Forgot />,
      }
    ]
  },
  {
    path: '/main',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="landing-page" replace />
      },
      {
        path: 'landing-page',
        element: <LandingPage />
      },
      {
        path: 'toko/:id',
        element: <DetailPage />
      },
      {
        path: 'cart',
        element: <CartPage />
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to="/main/landing-page" replace />,
  }
]);

function App() {
  const [auth, setAuth] = React.useState(null);
  const [cart, setCart] = React.useState({})

  return (
    <CartContext.Provider value={{ auth, setAuth, cart, setCart }}>
      <RouterProvider router={router} />
    </CartContext.Provider>
  );
}

export default App;