import React from "react";
import bannerImg from "../assets/banner.png";
import { CiPlay1 } from "react-icons/ci";

const Banner = () => {
  return (
    <section id="home">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Content */}

          <div className="md:w-1/2 mb-10 md:mb-0">
            <p className="btn btn-outline btn-primary border rounded-full">
              New: AI-Powered Tools Available
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Supercharge Your Digital Workflow
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today. Explore Products
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#products"
                className="btn btn-primary border rounded-full"
              >
                Explore Products
              </a>
              <a
                href="#"
                className="btn btn-outline btn-primary border rounded-full"
              >
                <CiPlay1 />
                Watch Demo
              </a>
            </div>
          </div>

          {/* banner immage */}
          <div className="md:w-1/2 flex justify-center">
            <img src={bannerImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
