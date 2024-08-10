// src/components/component/cart.jsx

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace('R$', '').replace('R$', '').replace(',', '.'));
      return total + price;
    }, 0).toFixed(2);
  };

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold mb-8">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <img src={item.image} alt={item.name} width={80} height={80} className="mr-4" />
                <div>
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <p className="text-muted-foreground">{item.price}</p>
                </div>
              </div>
              <button onClick={() => removeFromCart(index)} className="text-red-500 hover:underline">
                Remove
              </button>
            </div>
          ))}
          <div className="mt-8">
            <h3 className="text-xl font-bold">Total: ${calculateTotal()}</h3>
            <button className="mt-4 bg-primary text-white py-2 px-4 rounded">
              Checkout
            </button>
          </div>
        </div>
      )}
      <Link href="/shop" legacyBehavior>
        <a className="mt-8 inline-block bg-primary text-white py-2 px-4 rounded">Voltar para a Loja</a>
      </Link>
    </div>
  );
}
