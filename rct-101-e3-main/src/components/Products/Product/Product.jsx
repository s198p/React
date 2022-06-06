import React from "react";
import { useState, useEffect } from "react";

const Product = () => {
  // Note: this id should come from api
  // const product = { id: 1 };

  const [product, setProduct] = useState([]);
  useEffect ( () => {
    const fetchProduct = async () => {
      let r = await fetch("http://localhost:8080/products");
      let d = await r.json();
      setProduct(d);
    };
    fetchProduct();
  }, [] );

  return (
    <div >
      <h1>Products</h1>

    <div  >
        {product.map((p) => (

<div data-cy={`product-${product.id}`} 
style={{border:"1px solid black"}} >
<h3 data-cy="product-name">{p.name}</h3>
<h6 data-cy="product-description">{p.description}</h6>
<button data-cy="product-add-item-to-cart-button">Add to Cart</button>
<div>
  <button data-cy="product-increment-cart-item-count-button">+</button>
  <span data-cy="product-count">
    {
      
      // Count here from CartItems
    }
  </span>
  <button data-cy="product-decrement-cart-item-count-button">-</button>
  <button data-cy="product-remove-cart-item-button">Remove from cart</button>
</div>
</div>

        ))}
    </div>
    </div>

  
    // <div>
    //   <h1>Products</h1>
    //   <div>
    //     {product.map((p) => (
    //       <div key={p.id}>
    //         <h2>{p.name}</h2>
    //         <h5>{p.description}</h5>
    //       </div>
          
          
    //     ))}
    //   </div>
    // </div>
  );
};

export default Product;
