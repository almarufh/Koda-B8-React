import { RouterProvider, createBrowserRouter } from 'react-router';

import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Forgot from './pages/Forgot.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/auth/register',
    element: <Register />,
  },
  {
    path: '/auth/forgot-password',
    element: <Forgot />,
  },
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;