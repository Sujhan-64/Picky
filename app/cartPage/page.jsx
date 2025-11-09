"use client";
import { FaSync, FaTimesCircle } from "react-icons/fa";
import { useCart} from "../store/cart-store";
import { useCartActions } from "../store/cart-store";
import { useUser } from "../store/user-store";
import { useEffect, useState } from "react";
import { fetchAllProducts } from "@/lib/fetchAllProducts";
import updateCartAfterSignedIn from "./updateCartAfterSignedIn";
export default function Cart() {

  const cart = useCart()
  const {addToCart} = useCartActions()
  const {removeFromCart} = useCartActions()
  const {clearCart} = useCartActions()
  const {isAuthenticated} = useUser()
  const {uid} = useUser();
  
  //console.log(localStorage.getItem("cart-storage"))
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-light mb-6">Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Cart is Empty !</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={item._id}
              className="flex flex-col md:flex-row items-center md:items-start justify-between border-b pb-4"
            >
              {/* Image */}
              <div className="w-full md:w-1/6 flex justify-center mb-4 md:mb-0">
                <img
                  src={
                    item.image.startsWith("data:image")
                      ? item.image
                      : `data:image/jpeg;base64,${item.image}`
                  }
                  alt={item.name}
                  className="w-24 object-contain"
                />
              </div>

              {/* Details */}
              <div className="w-full md:w-2/3 px-4">
                <div className="text-lg font-medium">{item.name}</div>
                <div className="text-gray-500 text-sm">
                  <span className="font-semibold">Description: </span>
                  {item.description || "No description"}
                </div>

                <div className="flex items-center mt-2 space-x-2">
                  <button
                    type="button"
                    title="Update"
                    className="bg-gray-200 hover:bg-gray-300 p-2 rounded"
                  >
                    <FaSync />
                  </button>
                  <div className="text-gray-700">
                    <small>x</small> {item.price} SEK
                  </div>
                </div>
              </div>

              {/* Remove */}
              <div className="w-full md:w-1/6 text-right">
                <button
                  type="button"
                  title="Remove"
                  onClick={() => removeFromCart(item._id)}
                  className="text-red-500 hover:text-red-700 mt-2"
                >
                  <FaTimesCircle size={20} />
                </button>
              </div>
            </div>
          ))}

          {/* Special Offer */}
          <div className="bg-yellow-100 text-yellow-800 p-4 rounded-lg text-center font-medium">
            Add some more articles and get a discount!!
          </div>

          {/* Clear Cart */}
          <div className="flex justify-end">
            <button
              onClick={clearCart}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
