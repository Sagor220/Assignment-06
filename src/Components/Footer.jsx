import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BiLogoInstagramAlt } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">DigiTools</h2>
            <p>
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>
          <div className="">
            <ul className="space-y-2">
              <li className="text-xl">Products</li>
              <li>Features</li>
              <li>Pricing</li>
              <li>Templates</li>
              <li>Integrations</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li className="text-xl">Company</li>
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Peers</li>
            </ul>
          </div>
          <div>
            <div className="mb-4">
              <h2 className="text-xl">Social links</h2>
            </div>
            <div className="flex space-x-4">
              <a
                className="border rounded-full bg-white text-black w-10 h-10 flex items-center justify-center "
                href="#"
              >
                <BiLogoInstagramAlt />
              </a>

              <a
                className="border rounded-full bg-white text-black w-10 h-10 flex items-center justify-center "
                href="#"
              >
                {" "}
                <FaFacebook />
              </a>
              <a
                className="border rounded-full bg-white text-black w-10 h-10 flex items-center justify-center "
                href="#"
              >
                {" "}
                <FaSquareXTwitter />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center flex justify-between">
          <div>
            <p className="text-gray-400">
              © 2026 DigitalTools. All rights reserved.
            </p>
          </div>
          <div>
            <ul className="flex justify-between gap-4 text-gray-400">
              <li>Privacy Policy</li>
              <li>Terms Condition</li>
              <li>Cookies</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
