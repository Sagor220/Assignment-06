import React, { use } from "react";
import Card from "./Card";

const Cards = ({ productsPromise }) => {
  const cards = use(productsPromise);
  console.log(cards);
  return (
    <div>
      <p>hello</p>
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default Cards;
