import React from "react";
import './App.css';
import RefTut from "./components/RefTut";
import Stopwatch from "./components/StopWatch";
import Template from "./components/Template";


function App() {
  return (
    <div className="App">
      {/* <h1>hello world</h1> */}
      <React.Fragment>
        <h3>Challenge 1 -- user gives data and it is displayed on screen. It has a filter feature too.</h3>
        <Template />
      </React.Fragment>
      <br />
      <RefTut />
      <hr />
      <p>this is an example from <a href="https://beta.reactjs.org/apis/react/useRef" target="blank" >beta react docs</a></p>
      <Stopwatch />
    </div>
  );
}

export default App;
