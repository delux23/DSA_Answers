import React from "react";
import CartItem from "./CartItem";

function Cart({
  cart,
  removeFromCart,
  updateQuantity,
  discountCode,
  setDiscountCode,
  applyDiscount,
  calculateTotal,
}) {
  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length > 0 ? (
        cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
          />
        ))
      ) : (
        <p>Your cart is empty</p>
      )}

      <div className="discount-section">
        <input
          type="text"
          placeholder="Discount Code"
          value={discountCode}
          onChange={(e) => setDiscountCode(e.target.value)}
        />
        <button onClick={applyDiscount}>Apply Discount</button>
      </div>

      <h3 className="total-price">Total: ${calculateTotal()}</h3>
    </div>
  );
}

export default Cart;
