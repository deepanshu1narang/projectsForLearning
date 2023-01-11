import React from "react";
import Header from "./components/Layout/Header";
import "./App.css";
import Meals from "./components/Meals/Meals";
import CartProviderV1 from "./Store/CartProviderV1";

function App() {

  return (
    <React.Fragment>
      <CartProviderV1>
        <Header />
        <Meals />
      </CartProviderV1>
    </React.Fragment>
  );
}

export default App;
