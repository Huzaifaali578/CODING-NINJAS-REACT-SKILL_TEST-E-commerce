import React, { useEffect } from 'react';
import Navbar from './features/navbar/Navbar';
import ProductPage from './pages/ProductPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CartPage from './pages/CartPage';
import AddProduct from './pages/AddProduct';
import ProductDetailPage from './pages/ProductDetailPage';

const router = createBrowserRouter([
  {
    path: "/", element: <Navbar />,
    children: [
      { path: "/", element: <ProductPage /> },
      {path:"/cart", element:<CartPage />},
      {path:"/add-product", element:<AddProduct />},
      {path:"/edit-product/:id", element:<AddProduct />},
      {path:"/product-detail/:id", element:<ProductDetailPage />},
    ]
  },
  
])

function App() {
  return (
    <>
      <RouterProvider router={router}>

      </RouterProvider>
    </>
  );
}

export default App;
