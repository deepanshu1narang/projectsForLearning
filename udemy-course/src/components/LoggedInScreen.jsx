import React from "react";
import D3info from "./D3info";
import RefTut from "./useRef/RefTut";
import Stopwatch from "./useRef/StopWatch";
import Template from "./Template";
import LogButtonClicks from "./useRef/LogButtonClicks";
import StopWatch2 from "./useRef/StopWatch2";
import AccessingDomElement from "./useRef/AccessingDomElement";
import LearnCLeanup from "./LearnCleanup";
import LogOutButton from "./LogOutButton";
import UseRefPlayer from "./useRef/UseRefPlayer";
import BetterUseCaseOfUseReducer from "./useReducer/BetterUseCaseOfUseReducer";
import Counter2 from "./useReducer/Counter2";
import ToDoList from "./useReducer/ToDoList";
import ContextUsedCase from "./useContext/ContextUsedCase";
import NoteState from "./useContext/store/notes-context-state";

export default function LoggedInScreen(props) {
  return (
    <div>
      <LogOutButton logOut={props.logOut} />
      <React.Fragment>
        <h3>
          Challenge 1 -- user gives data and it is displayed on screen. It has a
          filter feature too.
        </h3>
        <Template />
      </React.Fragment>
      <br />
      <hr />
      <LearnCLeanup />
      <hr />
      <h1>Challenge 2 --- ref and useRef hook</h1>
      <RefTut />
      <hr />
      <p>
        this is an example from{" "}
        <a href="https://beta.reactjs.org/apis/react/useRef" target="blank">
          beta react docs
        </a>
      </p>
      <Stopwatch />
      <LogButtonClicks />
      <StopWatch2 />
      <AccessingDomElement />
      <div style={{ border: "1px solid blue" }}>
        use case: video player using useRef(); creating bugs... will solve later
        {/* <UseRefPlayer /> */}
      </div>
      <hr />
      <h1>Challenge 3 -- use some server side event</h1>
      <hr />
      <h1>Challenge 4 -- extract data from csv file</h1>
      <hr />
      <h1>Challenge 5 - It should not log out on refresh</h1>
      completed
      <hr />
      <h1>Challenge 6 - {"useReducer()"}</h1>
      <BetterUseCaseOfUseReducer />
      <Counter2 />
      <h2>To Do List</h2>
      <ToDoList />
      <hr />
      <h1>Challenge 7 --- {"useContext()"}</h1>
      <NoteState>
        <ContextUsedCase />
      </NoteState>
      <h3>
        Reference: usereducer-satrting-project
      </h3>
      <p style={{textAlign: "justify", margin: "1vh 3vw", width: "90%", textDecoration: "underline", fontWeight: "900", fontSize: "1.3rem"}}>
        "KEY TAKEAWAYS: if I want to use the context for App.js then I need to wrap the App.js in the provider instead of giving it here... look... AuthContext was used for Home component and MainHeader component; and those components are wrapped in here.....
        Home component uses NoteState (Provider) too and Home is wrapped inside the provider too... App component is no exception and it has to be inside a provider if it needs to utilize any context no matter what"
      </p>
      <aside style={{ border: "4px solid black" }}>
        <D3info />
      </aside>
    </div>
  );
}
