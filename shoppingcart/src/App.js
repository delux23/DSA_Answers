// src/App.js
import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import products from "./data/products";

function App() {
  const [cart, setCart] = useState([]);
  const [discountCode, setDiscountCode] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);

  const addToCart = (product) => {
    // Check if the product is already in the cart
    const existingItem = cart.find((item) => item.id === product.id);
  
    if (existingItem) {
      // If it exists, update its quantity
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      // If it doesn't exist, add it to the cart with quantity 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + quantity } : item
      )
    );
  };

  const applyDiscount = () => {
    if (discountCode === "DISCOUNT10") {
      setDiscountApplied(true);
    } else {
      alert("Invalid discount code!");
    }
  };

  const calculateTotal = () => {
    let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    if (discountApplied) {
      total *= 0.9; // 10% discount
    }
    return total.toFixed(2);
  };

  return (
    <div className="container">
  <div className="row">
    <div className="col">
      <ProductList products={products} addToCart={addToCart} />
    </div>
    <div className="col">
      <Cart
        cart={cart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        discountCode={discountCode}
        setDiscountCode={setDiscountCode}
        applyDiscount={applyDiscount}
        calculateTotal={calculateTotal}
      />
    </div>
  </div>
</div>

  );
}

export default App;
