import React from 'react';
import D3info from "./D3info";
import RefTut from "./useRef/RefTut";
import Stopwatch from "./useRef/StopWatch";
import Template from "./Template";
import LogButtonClicks from "./useRef/LogButtonClicks";
import StopWatch2 from "./useRef/StopWatch2";
import AccessingDomElement from "./useRef/AccessingDomElement";
import LearnCLeanup from "./LearnCleanup";
import LogOutButton from './LogOutButton';
import UseRefPlayer from './useRef/UseRefPlayer';
import BetterUseCaseOfUseReducer from './useReducer/BetterUseCaseOfUseReducer';

export default function LoggedInScreen(props) {
  return (
    <div>
        <LogOutButton logOut={props.logOut} />
        <React.Fragment>
            <h3>Challenge 1 -- user gives data and it is displayed on screen. It has a filter feature too.</h3>
            <Template />
        </React.Fragment>
        <br />
        <hr />
        <LearnCLeanup />
        <hr />
        <h1>
            Challenge 2 --- ref and useRef hook
        </h1>
        <RefTut />
        <hr />
        <p>this is an example from <a href="https://beta.reactjs.org/apis/react/useRef" target="blank" >beta react docs</a></p>
        <Stopwatch />
        <LogButtonClicks />
        <StopWatch2 />
        <AccessingDomElement />
        <div style={{border: "1px solid blue"}}>
          use case: video player using useRef();
          creating bugs... will solve later
          {/* <UseRefPlayer /> */}
        </div>
      
        <hr />
        <h1>
        Challenge 3 -- use some server side event
        </h1>
        <hr />
        <h1>
        Challenge 4 -- extract data from csv file
        </h1>
        <hr />
        <h1>
        Challenge 5 - It should not log out on refresh
        </h1>
        completed
        <hr />
        Challenge 6 - {"useReducer()"}
        <BetterUseCaseOfUseReducer />
        
        
        <aside style={{border:"4px solid black"}}>
            <D3info />
        </aside>
    </div>
  )
}
