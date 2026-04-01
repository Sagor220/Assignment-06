import React, { use } from "react";
import Card from "./Card";

const Cards = ({ productsPromise }) => {
  const cards = use(productsPromise);
  console.log(cards);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default Cards;
