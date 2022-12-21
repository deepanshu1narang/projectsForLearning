import React from "react";
import Header from "./components/Layout/Header";
import Welcome from "./components/Layout/Welcome";
import "./App.css";
import MealsSummary from "./components/Meals/MealsSummary";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <React.Fragment>
      {/* <h2>Let's get started!</h2> */}
      <Header />
      <Welcome />
      <MealsSummary />
      <Meals />
    </React.Fragment>
  );
}

export default App;
