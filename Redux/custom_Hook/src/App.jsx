import React from "react";
import { useCart } from "./Component/useCart";

function App() {
  const { cart, addItem, removeItem, totalPrice } = useCart();

  return (
    <div>
      <h1>Shopping Cart</h1>

      <button onClick={() => addItem({ name: "T-Shirt", price: 500 })}>
        Add T-Shirt
      </button>

      <button onClick={() => addItem({ name: "Shoes", price: 2000 })}>
        Add Shoes
      </button>

      <h2>Cart Items:</h2>
      {cart.map((item, index) => (
        <div key={index}>
          {item.name} - ₹{item.price}
          <button onClick={() => removeItem(index)}>Remove</button>
        </div>
      ))}

      <h2>Total: ₹{totalPrice}</h2>
    </div>
  );
}

export default App;