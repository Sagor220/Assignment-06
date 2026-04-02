import React, { use } from "react";
import Card from "./Card";

const Cards = ({ productsPromise, cart, onAddToCart }) => {
  const products = use(productsPromise);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto">
      {products.map((product) => (
        <Card
          key={product.id}
          card={product}
          cart={cart}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default Cards;
