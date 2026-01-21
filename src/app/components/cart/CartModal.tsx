"use client";
import { useEffect, useRef } from "react";
import { useCartStore } from "@/app/Store";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartModal({ isOpen, onClose }: CartModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCartStore();
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tottalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [isOpen]);

  return (
    <dialog ref={dialogRef} onClose={onClose} className="bg-stone-600 text-white p-5">
      <h2>Cart {tottalItems}</h2>
      {cart.length === 0 ? (
        <h2>Your cart is empty</h2>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <p>
                ${item.price} × {item.quantity}
              </p>
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
              <button onClick={() => increaseQuantity(item.id)}>+</button>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <div className="total">Total: ${totalPrice}</div>
        </div>
      )}
      <button onClick={onClose}>Close</button>
    </dialog>
  );
}
