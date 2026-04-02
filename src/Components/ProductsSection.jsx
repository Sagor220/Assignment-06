import React from "react";

const ProductsSection = () => {
  return (
    <div className="text-center py-4 space-y-2.5 bg-violet-800 text-white">
      <h1 className="text-5xl md:text-6xl font-semibold">
        Premium Digital Tools
      </h1>
      <p>
        Choose from our curated collection of premium digital products designed
        <br />
        to boost your productivity and creativity
      </p>
      <div className="my-4">
        <button className="btn btn-primary border rounded-full mx-2 ">
          Products
        </button>
        <button className="btn btn-neutral btn-outline border rounded-full mx-2 px-8 text-white border-white">
          Cart
        </button>
      </div>
    </div>
  );
};

export default ProductsSection;
