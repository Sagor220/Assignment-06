import React from "react";

const Navbar = ({ cartNumber, cart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <nav>
        <div className="navbar bg-base-100 shadow-sm">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a
                    href="#products"
                    className="block px-3 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="block px-3 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="block px-3 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="block px-3 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="block px-3 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <a className="text-xl text-violet-600 font-bold">DigiTools</a>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a
                  href="#products"
                  className="block px-3 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="block px-3 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="block px-3 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="block px-3 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="block px-3 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="navbar-end">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>

                  {cartNumber > 0 && (
                    <span className="badge badge-primary badge-sm indicator-item">
                      {cartNumber}
                    </span>
                  )}
                </div>
              </div>

              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-50 mt-3 w-64 shadow"
              >
                <div className="card-body">
                  <span className="text-lg font-bold">
                    {cartNumber} Item{cartNumber !== 1 ? "s" : ""}
                  </span>

                  {/* Cart items list sectiobs */}
                  {cart.length === 0 ? (
                    <p className="text-sm text-gray-400">Your cart is empty.</p>
                  ) : (
                    <ul className="flex flex-col gap-2 max-h-48 overflow-y-auto">
                      {cart.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-center justify-between text-sm"
                        >
                          <span>
                            {item.icon} {item.name}
                          </span>
                          <span className="font-semibold text-violet-600">
                            ${item.price}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="divider my-1"></div>
                  <span className="text-info font-semibold">
                    Subtotal: ${total.toFixed(2)}
                  </span>

                  <div className="card-actions mt-1">
                    <button className="btn btn-primary btn-block btn-sm">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="#login"
              className="block mr-2 px-3 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md"
            >
              Login
            </a>
            <a className="btn btn-primary border rounded-full">Get Started</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
