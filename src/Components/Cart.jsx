import React from "react";
import { toast } from "react-toastify";
import { CiShoppingCart } from "react-icons/ci";

const Cart = ({ cart, onRemove, onCheckout }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleRemove = (item) => {
    onRemove(item.id);
    toast.error(`${item.name} removed from cart `);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.warning("Your cart is already empty!");
      return;
    }
    onCheckout();
    toast.success("Checkout successful! Thanks for your purchase ");
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Your Cart</h2>

      {cart.length === 0 ? (
        <div className="text-center text-gray-500 py-16">
          <p className="text-5xl m-auto mb-4">{<CiShoppingCart />}</p>
          <p className="text-xl">Your cart is empty.</p>
          <p className="text-sm mt-2">
            Go back to Products and add some tools!
          </p>
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-4">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-base-100 shadow rounded-xl p-4"
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-sm text-gray-500">
                      ${item.price}/{item.period}
                    </p>
                  </div>
                </div>
                <button
                  className="btn btn-error btn-sm"
                  onClick={() => handleRemove(item)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="mt-6 flex justify-between items-center text-lg font-semibold border-t pt-4">
            <span>Total ({cart.length} items)</span>
            <span className="text-violet-600">${total.toFixed(2)}</span>
          </div>

          {/* Checkout button */}
          <button
            className="btn btn-primary btn-block mt-6"
            onClick={handleCheckout}
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
