import React, { Fragment, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Layouts/Header/Header";
import HeroSection from "./components/Layouts/HeroSection";
import Meals from "./components/Layouts/Meals/Meals";
import Cart from "./components/Layouts/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Restaurants from "./pages/Restaurants";
import "./App.css";

import { useSelector } from 'react-redux'

function App() {
  const isCartVisible = useSelector(state => state.ui.isCartVisible);

  return (
    <CartProvider>
      {isCartVisible && <Cart />}
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <Fragment>
              <HeroSection />
              <Meals />
            </Fragment>
          }
        />

        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/login" element={<h1>Login</h1>} />
      </Routes>
    </CartProvider>
  );
}

export default App;
