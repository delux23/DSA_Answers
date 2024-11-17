import React from "react";

function ProductList({ products, addToCart }) {
  return (
    <div className="products">
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <p>{product.name}: ${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
