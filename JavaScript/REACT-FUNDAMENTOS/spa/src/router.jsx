import AdminHome from './pages/Admin/AdminHome';
import RootLayout from './pages/Admin/RootLayout';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Product from './pages/Product';
import Products from './pages/Products';

import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [{
                index: true,
                element: <Home />
            },
            {
                path: "products",
                element: <Products />
            },
            {
                path:"products/:productId",
                element: <Product />
            },
            {
                path: 'cart',
                element: <Cart />
            }
        ]
    },
    {
        path: "/adminHome",
        element: <AdminHome />
    }
])
export default router;