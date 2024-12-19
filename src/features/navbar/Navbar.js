import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { selectCart } from '../Cart/cartSlice';

const Navbar = () => {
  const cart = useSelector(selectCart)
    return (
      <>
      
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <Link to="/">E-Shop</Link>
        </div>

        {/* Search Bar */}
        {/* <div className="flex items-center w-full max-w-md mx-4">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 border rounded-l-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600">
            Search
          </button>
        </div> */}

        {/* Icons and Links */}
        <div className="flex items-center space-x-6">
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-4">
            <Link
              to="/add-product"
              className="text-gray-600 hover:text-gray-900 transition duration-300"
            >
              Add Products
            </Link>
            <a
              href="/about"
              className="text-gray-600 hover:text-gray-900 transition duration-300"
            >
              About
            </a>
            <a
              href="/contact"
              className="text-gray-600 hover:text-gray-900 transition duration-300"
            >
              Contact
            </a>
          </div>

          {/* Cart Icon */}
          <Link to="/cart" className="relative text-gray-600 hover:text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 5h14m-12 0a1.5 1.5 0 11-3 0m14 0a1.5 1.5 0 11-3 0"
              />
            </svg>
            {/* Cart Item Count */}
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {cart.length}
            </span>
          </Link>

          {/* Profile Icon */}
          <a href="/profile" className="text-gray-600 hover:text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11a4 4 0 11-8 0 4 4 0 018 0zm-4 6a9 9 0 00-7.457 3.757M12 17a9 9 0 017.457 3.757M15 11a9 9 0 00-7.457-3.757"
              />
            </svg>
          </a>
        </div>
        </div>
            </nav>
            <Outlet />
            </>
  );
};

export default Navbar;
