import React from "react";
import './App.css';
import List from "./components/List";
import Template from "./components/Template";


function App() {
  return (
    <div className="App">
      <h1>hello world</h1>
      <div>
        <h3>Challenge 1 -- user gives data and it is displayed on screen. It has a filter feature too.</h3>
        <Template />
      </div>
      <br />
    </div>
  );
}

export default App;
