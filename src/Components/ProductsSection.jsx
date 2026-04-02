import React from "react";

const ProductsSection = ({ activeSection, setActiveSection }) => {
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
        <button
          className={`btn border rounded-full mx-2 ${
            activeSection === "products"
              ? "btn-primary"
              : "btn-neutral btn-outline border-white text-white"
          }`}
          onClick={() => setActiveSection("products")}
        >
          Products
        </button>
        <button
          className={`btn border rounded-full mx-2 px-8 ${
            activeSection === "cart"
              ? "btn-primary"
              : "btn-neutral btn-outline border-white text-white"
          }`}
          onClick={() => setActiveSection("cart")}
        >
          Cart
        </button>
      </div>
    </div>
  );
};

export default ProductsSection;
