import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewProductAsync, editSelectedProduct, selectedProductSelector, selectProduct, updateProductAsync } from "../features/products/ProductSlice";
import { Navigate, useParams } from "react-router-dom";

const AddProduct = () => {
  const dispatch = useDispatch();
  const editSelectedProduct = useSelector(selectedProductSelector);
  const params = useParams();
  const [formOpen, setFormOpen] = useState(true);
  const initialProducts = useSelector(selectProduct);
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    rating: "",
    image: "",
  });

  useEffect(() => {
    if (editSelectedProduct && params.id) {
      setProduct({
        name: editSelectedProduct.name,
        description: editSelectedProduct.description,
        price: editSelectedProduct.price,
        rating: editSelectedProduct.rating,
        image: editSelectedProduct.image,
      });
    }
  }, [editSelectedProduct, params.id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!product.name || !product.description || !product.price || !product.rating || !product.image) {
      alert("Please fill out all fields.");
      return;
    }

    if (editSelectedProduct && params.id) {
      dispatch(updateProductAsync({ ...product, id: editSelectedProduct.id }));
      console.log("Editing Product:", { ...product, id: editSelectedProduct.id });
    } else {
      dispatch(addNewProductAsync({ ...product, id: `${initialProducts.length + 1}` }));
      console.log("Adding New Product:", { ...product, id: initialProducts.length + 1 });
    }

    setProduct({
      name: "",
      description: "",
      price: "",
      rating: "",
      image: "",
    });
    alert(editSelectedProduct ? "Product updated successfully!" : "Product added successfully!");
    setFormOpen(false);
  };

  return (
    <>
      {!formOpen && <Navigate to="/" replace={true} />}
      <div className="max-w-lg mx-auto mt-10 bg-white p-8 border rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">{editSelectedProduct ? "Edit Product" : "Add New Product"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Product Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={product.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter product name"
            />
          </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-medium mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={product.description}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter product description"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 font-medium mb-2">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter product price"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="rating" className="block text-gray-700 font-medium mb-2">
            Rating (1-5)
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={product.rating}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter product rating"
            min="1"
            max="5"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 font-medium mb-2">
            Image URL
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={product.image}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter image URL"
          />
        </div>

        <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            {editSelectedProduct ? "Update Product" : "Add Product"}
          </button>
        </form>
      </div>
    </>
  );
};

export default AddProduct;