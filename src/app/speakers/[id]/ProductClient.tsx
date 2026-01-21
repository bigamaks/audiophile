"use client";
import { useCartStore } from "@/app/Store";
import { useEffect } from "react";

interface ProductClientProps {
  product: {
    id: string;
    name: string;
    price: number;
    // quantity: number;
  };
}

export default function ProductClient({ product }: ProductClientProps) {
  const { cart, addToCart, increaseQuantity, decreaseQuantity } = useCartStore();
  const cartItem = cart.find(item => item.id === product.id);
  const currentQuantity = cartItem ? cartItem.quantity : 0;

useEffect(() => {
  console.log("Cart updated:", cart);
}, [cart]);

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity: 1,
    })};

      return (
      <div>
        <button
          onClick={handleAddToCart}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add to Cart
        </button>

        <button onClick={() => increaseQuantity(product.id)}>+</button>{currentQuantity} <button onClick={()=> decreaseQuantity(product.id)}>-</button>
      </div>
    );
}
