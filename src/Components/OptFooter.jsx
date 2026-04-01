import React from "react";

const OptFooter = () => {
  return (
    <div className="text-center bg-violet-800 text-white py-20 space-y-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Ready to Transform Your Workflow?
      </h1>
      <p>
        Join thousands of professionals who are already using Digitools to work
        smarter. <br />
        Start your free trial today.
      </p>
      <a
        className="btn btn-neutral btn-outline text-violet-800 border-white rounded-full mx-2 px-8 bg-white"
        href="#cards"
      >
        Explore Products
      </a>
      <a
        className="btn btn-neutral btn-outline text-white border-white rounded-full mx-2 px-8 bg-violet-800"
        href="#pricing"
      >
        View Pricing
      </a>
      <button></button>
      <p>14-day free trial • No credit card required • Cancel anytime</p>
    </div>
  );
};

export default OptFooter;
