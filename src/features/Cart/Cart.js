import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCart, updatecartAsync, removeCartItemAsync, RemoveFromcartAsync } from "./cartSlice"; // Assume removeCartItemAsync exists
import { fetchCartItem } from "./CartAPI";

// Cart Page component
const Cart = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCart);

  // Function to update quantity
  const updateQuantity = (item, action) => {
    if (item.quantity === 1 && action === "decrease") return;

    dispatch(
      updatecartAsync({
        ...item,
        quantity: action === "increase" ? item.quantity + 1 : item.quantity - 1,
      })
    );
  };

  // Function to remove item from cart
  const removeFromCart = (item) => {
    dispatch(RemoveFromcartAsync(item)); // Dispatch action to remove item
  };

  // Calculate total price
  const totalPrice = cartItem.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  // useEffect(() => {
  //   dispatch(fetchCartItem())
  // },[updateQuantity, updatecartAsync])

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Shopping Cart</h2>

      {cartItem.length === 0 ? (
        <p className="text-gray-600">Your cart is empty. Start shopping!</p>
      ) : (
        <div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            {cartItem.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 border-b"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-18 h-28 object-cover rounded-lg"
                />
                <div className="flex-1 ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-gray-600">Price: ${item.price}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => updateQuantity(item, "decrease")}
                      className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md hover:bg-gray-300"
                      disabled={item.quantity === 1}
                    >
                      -
                    </button>
                    <span className="mx-2 text-gray-800">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item, "increase")}
                      className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="text-gray-600">
                    Total: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item)}
                    className="text-red-500 hover:text-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="bg-white shadow-md rounded-lg mt-6 p-4 flex justify-between items-center">
            <span className="text-xl font-semibold text-gray-800">Total</span>
            <span className="text-xl font-semibold text-gray-800">
              ${totalPrice.toFixed(2)}
            </span>
          </div>

          {/* Checkout Button */}
          <div className="mt-6">
            <button
              onClick={() => alert("Proceeding to checkout...")}
              className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-200"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
