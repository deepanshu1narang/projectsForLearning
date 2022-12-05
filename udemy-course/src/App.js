import React, { useState } from "react";
import './App.css';
import LoggedInScreen from "./components/LoggedInScreen";
import LoginScreen from "./components/LoginScreen";

function App() {  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logIn = () =>{
    setIsLoggedIn(true);
  }

  const logOut = () => {
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
