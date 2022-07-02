import React, { useState } from "react";
import "./App.css";
import Hero from "./images/hero.webp";
import Header from "./components/Layouts/Header/Header";
import Meals from "./components/Layouts/Meals/Meals";
import Cart from "./components/Layouts/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [isModalShown, setIsModalShown] = useState(false);

  const showCartHandler = () => {
    setIsModalShown(true);
  };

  const hideCartHandler = () => {
    setIsModalShown(false);
  };

  return (
    <CartProvider>
      {isModalShown && <Cart onCartHide={hideCartHandler} />}
      <Header onCartOpen={showCartHandler} />
      <section
        className={`hero h-96 bg-contain bg-no-repeat bg-right-top py-10`}
        style={{ backgroundImage: `url(${Hero})` }}
      >
        <div className="h-full container mx-auto">
          <div className="h-full flex items-start justify-center flex-col">
            <h1 className="text-4xl font-light w-6/12 mb-5 leading-15">
              Food and Grocery Delivery from{" "}
              <span className="font-medium">Manila’s</span> Best Restaurants and
              Shops
            </h1>

            <p className="font-light mb-10">
              The meals you love, delivered with care
            </p>

            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-7 py-3 border border-transparent text-base font-medium rounded-md text-white bg-theme-orange hover:bg-indigo-700"
                >
                  {" "}
                  Get started{" "}
                </a>
              </div>
              <div className="ml-3 inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-7 py-3 border border-transparent text-base font-medium rounded-md text-orange-600 bg-white hover:bg-indigo-50"
                >
                  {" "}
                  Learn more{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Meals />
    </CartProvider>
  );
}

export default App;
