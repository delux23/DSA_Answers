import React from "react";

function CartItem({ item, removeFromCart, updateQuantity }) {
  return (
    <div className="cart-item">
      <p>
        {item.name} - ${item.price} x {item.quantity}
      </p>
      <div className="cart-actions">
        <button onClick={() => updateQuantity(item.id, -1)} disabled={item.quantity <= 1}>
          -
        </button>
        <button onClick={() => updateQuantity(item.id, 1)}>+</button>
        <button onClick={() => removeFromCart(item.id)}>Remove</button>
      </div>
    </div>
  );
}

export default CartItem;
