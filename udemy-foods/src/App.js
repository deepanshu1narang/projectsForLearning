import React from "react";
import Header from "./components/Layout/Header";
import "./App.css";
import Meals from "./components/Meals/Meals";
import CartProvider from "./Store/CartProvider";

function App() {
  return (
    <CartProvider>
      {/* <h2>Let's get started!</h2> */}
      <Header />
      <Meals />
    </CartProvider>
  );
}

export default App;
