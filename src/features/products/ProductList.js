import React, { useEffect, useState } from "react";
import { PencilIcon } from "@heroicons/react/16/solid";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, editSelectedProduct, productDetailById, selectProduct } from "./ProductSlice";
import { Link } from "react-router-dom";

// Sample product data (can be fetched from an API)
// const initialProducts = [
//   {
//     id: 1,
//     name: 'Product 1',
//     description: 'This is a great product with amazing features.',
//     price: 29.99,
//     rating: 4.5,
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     id: 2,
//     name: 'Product 2',
//     description: 'This is another amazing product that you will love.',
//     price: 49.99,
//     rating: 4.0,
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     id: 3,
//     name: 'Product 3',
//     description: 'This product is affordable and packed with great features.',
//     price: 19.99,
//     rating: 3.5,
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     id: 4,
//     name: 'Product 4',
//     description: 'A top-quality product that is highly recommended.',
//     price: 39.99,
//     rating: 5.0,
//     image: 'https://via.placeholder.com/150',
//   },
// ];

const ProductList = () => {
  const [cart, setCart] = useState([]);
  const initialProducts = useSelector(selectProduct);
  const [sortProduct, setSorProduct] = useState([]);
  const dispatch = useDispatch()
  const totalProduct = initialProducts.length
  useEffect(() => {
    if (initialProducts && initialProducts.length > 0) {
      setSorProduct(initialProducts);
    }
  }, [initialProducts]);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id))
    setSorProduct(initialProducts)
  };
  const handleEdit = (product) => {
    dispatch(editSelectedProduct(product))
    console.log("edit",product);
  };

  // handle sort funtion
  const handleSort = (value) => {
    // Split value into field and order
    const [field, order] = value.split('-')
    console.log(field, order)
    const sortedProducts = [...initialProducts].sort((a, b) => {
      if (order === "asc") {
        return a[field] > b[field] ? 1 : a[field] < b[field] ? -1 : 0;
      } else {
        return a[field] < b[field] ? 1 : a[field] > b[field] ? -1 : 0;
      }
    });
    setSorProduct(sortedProducts)
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Product List</h2>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Total Product { totalProduct}</h2>
        <div className="md-4 flex">
          <h1 className="text-2xl font-bold text-gray-800 mb-2 mr-3">sort</h1>
          <select
            onChange={(e) => handleSort(e.target.value)}
            className="flex items-center bg-yellow-500 text-black px-2 py-2 mb-5 rounded-lg hover:bg-yellow-600 transition duration-200"
          >
            <option value="">--Choose Sort Option--</option>
            <option value="price-asc">Price Low to High</option>
            <option value="price-desc">Price High to Low</option>
            <option value="rating-desc">Rating High to Low</option>
            <option value="name-asc">Name A to Z</option>
            <option value="name-desc">Name Z to A</option>
          </select>


        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortProduct.map((product) => (
          <div
            key={product.id}
            className="bg-white border rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out"
            >
          <Link to={`/product-detail/${product.id}`} onClick={() => dispatch(productDetailById(product))}
            key={product.id}>
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-30 h-48 ml-10 py-5 px-10 object-cover rounded-t-lg"
            />
                </div>
            
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <p className="text-gray-600 mt-2 font-semibold">
                ${product.price}
              </p>
              <div className="flex items-center mt-2">
                {/* Displaying rating as stars */}
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    fill={index < product.rating ? "yellow" : "none"}
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 17.27l6.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73-1.64 7.03L12 17.27z"
                    />
                  </svg>
                ))}
                <span className="ml-2 text-gray-600">{product.rating} / 5</span>
                </div>
              </div>
              </Link>
              {/* Edit and Delete Buttons */}
              <div className="mt-4 flex justify-between items-center">
                <Link
                  onClick={() => handleEdit(product)}
                  to={`/edit-product/${product.id}`}
                  className="flex items-center bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-200"
                  >
                  <PencilIcon className="w-5 h-5 mr-2" />
                  Edit Product
                </Link>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="flex items-center bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
                  >
                  Delete Product
                </button>
              </div>
          </div>
          
        
        ))}
        </div>
    </div>
  );
};

export default ProductList;
