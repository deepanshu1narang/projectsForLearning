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
        
        <footer>
            <D3info />
        </footer>
    </div>
  )
}
