"use client";
import { useCart } from "@/app/store/cart-store";
import { useCartActions } from "@/app/store/cart-store";
import Button from "@/components/Button";
import { useEffect } from "react";

export default function ProductClient({ product }) {
  const {addToCart} = useCartActions()
  const cart = useCart();

  return (
    <div>
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
        <img
          src={`data:image/jpeg;base64,${product.image}`}
          alt={product.name}
          className="w-full max-h-[500px] object-contain border mb-6"
        />
        <p className="text-xl font-semibold text-green-600 mb-2">₹{product.price}</p>
        <p className="text-gray-700">{product.description || "No description provided."}</p>
      </div>
      <div className="flex justify-center mt-8">
        <Button onClick={() => addToCart(product)} />
      </div>
    </div>
  );
}