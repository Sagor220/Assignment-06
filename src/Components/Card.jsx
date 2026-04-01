import React from "react";
import { MdDone } from "react-icons/md";

const Card = ({ card }) => {
  const { name, description, features, price, icon, period, tag } = card;
  return (
    <div>
      <div className="card bg-base-100 shadow-sm ">
        <div className="card-body ">
          <span className="text-2xl">{icon}</span>

          {tag === "Best Seller" ? (
            <div className="badge badge-soft badge-warning absolute top-0 right-0 m-2.5">
              Best Seller
            </div>
          ) : tag === "Popular" ? (
            <div className="badge badge-soft badge-error absolute top-0 right-0 m-2.5">
              Popular
            </div>
          ) : tag === "New" ? (
            <div className="badge badge-soft badge-info absolute top-0 right-0 m-2.5">
              New
            </div>
          ) : (
            <div className="badge badge-outline absolute top-0 right-0 m-2.5">
              {tag}
            </div>
          )}
          <div className="flex justify-between">
            <h2 className="text-2xl font-semibold">{name}</h2>
          </div>
          <p>{description}</p>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            <li>
              <span className="text-xl font-bold">${price}</span>
              <span className="text-gray-500">/{period}</span>
            </li>
            {features.map((feature, index) => (
              <li key={index} className="flex gap-2">
                <MdDone className="text-green-600" /> {feature}
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <button className="btn btn-primary btn-block">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
