import React, { useState, useEffect, useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext, { AuthContextProvider } from "./Store/auth-context";
import UserContext from "./Store/user-auth-context";
import User01 from "./components/MainHeader/User01";
import User02 from "./components/MainHeader/User02";
import UserContext2 from "./Store/user2-auth-context";
import User02_2 from "./components/MainHeader/User02-2";
import NoteState from "./Store/note-context-state";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

  //   if (storedUserLoggedInInformation === "1") {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   localStorage.setItem("isLoggedIn", "1");
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem("isLoggedIn");
  //   setIsLoggedIn(false);
  // };

  const ctx = useContext(AuthContext);
  console.log(ctx);

  return (
    <React.Fragment>
      {/* <AuthContext.Provider   ........... 
      "COMMENTS: if I want to use the context for App.js then I need to wrap the App.js in the provider instead of giving it here... look... aut context was used for <Home> component and MainHeader component; and those components are wrapped in here.....
      Home component uses NoteState (Provider) too and Home is wrapped inside the provider too... App component is no exception and it has to be inside a provider if it needs to utilize any context no matter what"

        value={{
          isLoggedIn: isLoggedIn,
          onLogOut: logoutHandler,
          mouseIsMoving: () => {
            console.log("event from context is working");
          },
          mouseIsMoving2: () => {
            console.log("event from context is working differently");
          },
        }}
      >
        <MainHeader onLogout={logoutHandler} />
        <main>
          {!isLoggedIn && <Login onLogin={loginHandler} />}
          {isLoggedIn && <NoteState>
            <Home onLogout={logoutHandler} />
          </NoteState>}
        </main>
      </AuthContext.Provider> */}

      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && (
          <NoteState>
            <Home />
          </NoteState>
        )}
      </main>

      {ctx.isLoggedIn && (
        <span>
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
          <p style={{textAlign: "justify", margin: "1vh 3vw", width: "90%", textDecoration: "underline", fontWeight: "900", fontSize: "1.3rem"}}>
            "KEY TAKEAWAYS: if I want to use the context for App.js then I need to wrap the App.js in the provider instead of giving it here... look... AuthContext was used for Home component and MainHeader component; and those components are wrapped in here.....
            Home component uses NoteState (Provider) too and Home is wrapped inside the provider too... App component is no exception and it has to be inside a provider if it needs to utilize any context no matter what"
          </p>
        </span>
      )}
    </React.Fragment>
  );
}

export default App;
