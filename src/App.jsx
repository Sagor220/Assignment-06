import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import ProductsSection from "./Components/ProductsSection";
import Stats from "./Components/Stats";
import Steps from "./Components/Steps";
import Pricing from "./Components/Pricing";
import OptFooter from "./Components/OptFooter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./Components/Cart";

const fetchProducts = async () => {
  const res = await fetch("./data/products.json");
  return res.json();
};

const productsPromise = fetchProducts();

function App() {
  const [cart, setCart] = useState([]);
  const [activeSection, setActiveSection] = useState("products");

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const handleRemoveFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    setCart([]);
  };

  return (
    <>
      <Navbar cartNumber={cart.length} cart={cart} />
      <Banner />
      <Stats />
      <ProductsSection
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {activeSection === "products" ? (
        <Suspense
          fallback={<span className="loading loading-dots loading-xl"></span>}
        >
          <Cards
            productsPromise={productsPromise}
            cart={cart}
            onAddToCart={handleAddToCart}
          />
        </Suspense>
      ) : (
        <Cart
          cart={cart}
          onRemove={handleRemoveFromCart}
          onCheckout={handleCheckout}
        />
      )}

      <Steps />
      <Pricing />
      <OptFooter />
      <Footer />
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;
