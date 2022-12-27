import React, { useState, useEffect } from "react";

// const AuthContext = React.createContext({
//     isLoggedIn: false,
//     mouseIsMoving: () => {console.log("event from context is working")},
//     mouseIsMoving2: () => {console.log("event from context is working differently")},
//     onLogin: (email,password) => {}
// });
const AuthContext = React.createContext(); /// write nothing here b/coz value is always taken from the .Provider value

const AuthContextProvider = (props) => {
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
    console.log("working");
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,

        mouseIsMoving: () => {
          console.log("event from context is working");
        },
        
        mouseIsMoving2: () => {
          console.log("event from context is working differently");
        }

      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
export { AuthContextProvider };
