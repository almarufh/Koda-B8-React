import React from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'
import AuthLayout from '../src/pages/auth/AuthLayout'
import Login from '../src/pages/auth/Login'
import ForgotPaasword from './pages/auth/ForgotPaasword'
import Register from '../src/pages/auth/Register'
import MainLayout from './pages/main/MainLayout'
import LandingPage from './pages/main/LandingPage'
import BrowseProducts from './pages/main/toko/BrowseProducts'
import DetailPage from './pages/main/toko/DetailPage'
import Cart from './pages/main/Cart'
import AddresList from './pages/main/profile/AddresList'
import TokoLayout from './pages/main/toko/TokoLayout'
import ProfileLayout from './pages/main/profile/ProfileLayout'
import MyOrder from './pages/main/profile/MyOrder'
import Wishlist from './pages/main/profile/Wishlist'
import EditProfile from './pages/main/profile/EditProfile'
import CheckoutLayout from './pages/main/checkout/CheckoutLayout'
import StepFirst from './pages/main/checkout/StepFirst'
import StepSecond from './pages/main/checkout/StepSecond'
import StepThird from './pages/main/checkout/StepThird'
import Succes from './pages/main/checkout/Succes'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/main" replace />
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <Navigate to='login' replace />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'forgotpassword',
                element: <ForgotPaasword />
            },
            {
                path: 'register',
                element: <Register />
            }
        ]
    },
    {
        path: '/main',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Navigate to='home' replace />
            },
            {
                path: 'home',
                element: <LandingPage />
            },
            {
                path: '',
                element: <TokoLayout />,
                children: [
                    {
                        path: 'toko',
                        element: <BrowseProducts />
                    },
                    {
                        path: 'products',
                        element: <DetailPage />
                    }
                ]
            },
            {
                path: 'cart',
                element: <Cart />
            },
            {
                path: 'profile',
                element: <ProfileLayout />,
                children: [
                    {
                        path: 'order',
                        element: <MyOrder />
                    },
                    {
                        path: 'whislist',
                        element: <Wishlist />
                    },
                    {
                        path: 'addres',
                        element: <AddresList />
                    },
                    {
                        path: 'edit',
                        element: <EditProfile />
                    }
                ]
            },
            {
                path: 'checkout',
                element: <CheckoutLayout />,
                children: [
                    {
                        index: true,
                        element: <Navigate to='first' replace />
                    },
                    {
                        path: 'first',
                        element: <StepFirst />
                    },
                    {
                        path: 'second',
                        element: <StepSecond />
                    },
                    {
                        path: 'third',
                        element: <StepThird />
                    },
                    {
                        path: 'success',
                        element: <Succes />
                    }
                ]
            }
        ]
    }
])

function App() {
  return (
    <RouterProvider router={router}/> 
  )
}

export default App