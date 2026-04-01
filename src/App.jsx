import { Suspense } from "react";
import "./App.css";
import Banner from "./Components/Banner";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import ProductsSection from "./Components/ProductsSection";
import Stats from "./Components/Stats";
import Steps from "./Components/Steps";

const fetchProducts = async () => {
  const res = await fetch("./data/products.json");
  return res.json();
};

const productsPromise = fetchProducts();
console.log(productsPromise);
function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Stats />
      <ProductsSection />
      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <Cards productsPromise={productsPromise} />
      </Suspense>
      <Steps />

      <Footer />
    </>
  );
}

export default App;
