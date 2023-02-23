import React from "react";
import Header from "./components/Layout/Header";
import "./App.css";
import Meals from "./components/Meals/Meals";
import CartProviderV1 from "./Store/CartProviderV1";

function App() {

  return (
    <React.Fragment>
        <Header />
        <Meals />
    </React.Fragment>
  );
}

export default App;
