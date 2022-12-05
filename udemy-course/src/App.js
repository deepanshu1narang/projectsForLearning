import React, { useState, useEffect } from "react";
import './App.css';
import LoggedInScreen from "./components/LoggedInScreen";
import LoginScreen from "./components/LoginScreen";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const storedUserLoggedInInformation = localStorage.getItem("loggedInStatus");

    // storedUserLoggedInInformation === "1" ? setIsLoggedIn(true) : setIsLoggedIn(false); // without useEffect a lot of re-renders

    useEffect(() => {
      storedUserLoggedInInformation === "1" ? setIsLoggedIn(true) : setIsLoggedIn(false);

      return () => {}
    }, []);
    

  const logIn = () =>{
    localStorage.setItem("loggedInStatus", "1");
    setIsLoggedIn(true);
  }

  const logOut = () => {
    localStorage.setItem("loggedInStatus", "0");
    setIsLoggedIn(false);
  }

  return (
    <div className="App">
      <h1>Hello World</h1>
      {isLoggedIn ? <LoggedInScreen logOut={logOut}/> : <LoginScreen logIn={logIn} />}
    </div>
  );
}

export default App;
