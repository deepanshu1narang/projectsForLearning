import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./Store/auth-context";
import UserContext from "./Store/user-auth-context";
import User01 from "./components/MainHeader/User01";
import User02 from "./components/MainHeader/User02";
import UserContext2 from "./Store/user2-auth-context";
import User02_2 from "./components/MainHeader/User02_2";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>

      <AuthContext.Provider value={{ 
        isLoggedIn: isLoggedIn,
        onLogOut: logoutHandler  
      }}>
        <MainHeader onLogout={logoutHandler} />
        <main>
          {!isLoggedIn && <Login onLogin={loginHandler} />}
          {isLoggedIn && <Home onLogout={logoutHandler} />}
        </main>
      </AuthContext.Provider>

      <UserContext.Provider value="This is User01 value provided from UserContext">
        <User01 />
      </UserContext.Provider>

      <UserContext2.Provider
        value={{
          employee: "Deepanshu Narang",
          empId: "INC02263",
          employer: "Incture Technologies",
          workDaysPerMonth: 26,
        }}
      >
        <User02 />
        <hr />
        <User02_2 />
      </UserContext2.Provider>

    </React.Fragment>
  );
}

export default App;
