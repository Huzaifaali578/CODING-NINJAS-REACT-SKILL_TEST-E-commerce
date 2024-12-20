import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productDetailSelector } from "../ProductSlice";
import { addTocartAsync, fetchCartItemAsync, selectCart, updatecartAsync } from "../../Cart/cartSlice";

const ProductDetail = () => {
  const { id } = useParams();
    const product = useSelector(productDetailSelector);
    const cart = useSelector(selectCart)
    const dispatch = useDispatch()

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <h2 className="text-xl font-semibold text-gray-700">Product not found</h2>
      </div>
    );
    }
    
    const addToCart = (product) => {
        const index = cart?.findIndex((item) => product.id === item.id);

        if (index !== -1 && cart[index].id === product.id) { 
            dispatch(updatecartAsync({ ...cart[index], quantity: cart[index].quantity + 1 }))
            // dispatch(fetchCartItemAsync())
            // console.log("item in cart", { ...cart[index], quantity: cart[index].quantity + 1 });
            alert("Item Is Already In Cart Quantity Updated ")
            return;
        } else {
            dispatch(addTocartAsync({ ...product, quantity: 1 }))
            dispatch(fetchCartItemAsync())
            alert("Item Added successfully")
            // console.log("add to cart", { ...product, quantity: 1 });
        }
    }

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-64 md:h-full"
            />
          </div>
          <div className="p-6 md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-xl font-semibold text-gray-800 mb-4">Price: ₹{product.price}</p>
            <div className="flex items-center mb-4">
              <span className="text-yellow-500 mr-2">{"★".repeat(product.rating)}</span>
              <span className="text-gray-600">({product.rating} / 5)</span>
            </div>
            <button
                onClick={() => addToCart(product)}
                className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
              >
                Add to Cart
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
