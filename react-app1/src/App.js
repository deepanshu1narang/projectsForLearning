import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./Header2.css";
import {Heading, List} from "./components/heading"
import MessageToDisplay, { VariableClassName } from "./components/wish";
import {Heading2, Card, taylor, animeCharacters, ForOf} from "./components/PropCards";
import myImage from "./images/deepanshu.jpg";
// import Deepanshu from ".src/images/deepanshu.jpeg"
import {emojisInfo} from "./components/emojipediaInfo.js";
import Enter, {Footer} from "./components/emojipedia";
import "./Emojipedia.css";
import { LoggedIn, LogIn, ToRegister } from "./components/logIn";
import { RandomText, WhyToLearnHooks } from "./components/state1";
import { CountClicks, DisplayTime, HooksPractice } from "./components/hooks1";
import { CarsInfo, LearnToDestructure } from "./components/destructuring01";
import { ReactForm, Subscribe } from "./components/eventHandling";
import FormsChallenge from "./components/reactFormChallenge";
import { Parent } from "./components/parent";
import {IntroTOUseState, PostMethod, Timer} from "./components/UseEffectHook"
import { DataFetch, UseEffect2, WindowWidth } from "./components/useEffect2";
import RouterInfo from "./components/RouterInfo";


function App() {

  const name = "Deepanshu";
  const clan = "Narang";
  let golGappe_img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqWXgmxqquZC0jKYacXGzZkcLRPjyRaqtptw&usqp=CAU";

  let customStyle = {
    color: "green",
    textDecoration: "overline",
    backgroundColor : "palegoldenrod"
  }

  customStyle.textDecoration = "line-through";

  function lNum() {
    let x = Math.floor(Math.random() * 41 + 10);
    if (x > 30) return 7;
    else return 17;
  }

  let isLogedIn = true;
  let c = 9;
  let ifRegistered2 = true;
  let ifRegistered = false;


  return (
    <div className="App">

      <header className="App-header">

        <DisplayTime />
        <span id = "dimensions">
          <WindowWidth />
        </span>

        <h1>Hello {name}</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <h3>
          Learning ReactJS with{" "}
          <a
            className="App-link"
            href="https://www.udemy.com/course/the-complete-web-development-bootcamp/learn/lecture/17038612#content"
            target="_blank"
            rel="noopener noreferrer"
          >
            Anjela
          </a>{" "}
          <i>(udemy)</i>
        </h3>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>


      </header>

      <header id="header2" className = 'header2'>
          <div id="task1">
            <h3>Food Images</h3>
            <ul type="none" className = "horizontal-list">

              <li> <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Cr1okS2v3m0YmpIiMsHNNHaCfRzdSa3n_w&usqp=CAU" className="square100" alt = "roti" /> </li>

              <li> <img className = "square100" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUwhjA0ifkyzfEOeBLQS0dNcKfb2Rq2c8hoFSDe28M0EJ9UFE3ISMYc_EVY-PpuBlrPdE&usqp=CAU" alt = "noodles" /> </li>

              <li> <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPFBXby6N8mAw7lf80fN7RrK5Fn5ctmIS6pA&usqp=CAU" className="square100" alt = "burger" /> </li>

              <li> <img src = {golGappe_img} className = "square100" alt = "GOL Gappe" /> </li>
            </ul>
              <span id = 'inlineStyling'>
                <p style = {customStyle}>
                  My lucky number is {lNum()} or {`${lNum()}`}
                </p>
              </span>
          </div>

          <div id="task2">
              <h3> Task 2 </h3>
            <p>
              Created by {name} {clan}.
              <br />
              Copyright {new Date().getFullYear()}
            </p>
          </div>
        </header>

        <header id = 'header3'>
          
          <MessageToDisplay />

        </header>

        <header id = 'header4'>
          <div id = 'components'>
            {/* testing */}
            <Heading />
            <List />
          </div>
        </header>

        <header id = 'header5'>
          <h2 id = 'this-only-center'>props tutorials 1</h2>
          <Heading2 title = "Contact Details" />

              <Card name = "Selena Gomez" ph_no = "+1 46542452" emailId = "selena.gomez001@gmail.com" imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFmi5-BVWtxBO5n7FZYvh5RdnXHp51PR-bkg&usqp=CAU" id = "im01" />

              <Card name = "Deepanshu Narang" ph_no ="+91 9050512758" emailId ="deepanshunarang19@gmail.com" imageUrl = {myImage} id = "im02" />

              <Card name = {taylor.name} ph_no = {taylor.ph_no} emailId = {taylor.emailId} imageUrl = {taylor.imageUrl} id = "im03" />

              { 
                // mapping data to components

                animeCharacters.map( function(person) {

                  return(
                      <Card key = {person.id} name = {person.name} ph_no = {person.ph_no} emailId = {person.emailId} imageUrl = {person.imageUrl} />
                    );

                } ) 
              }
              
              <strong>Here we mapped data to components and look into the code that <u>Card</u> component was used only once.</strong>

              <p>
                <strong><u>'key' prop has to be given and its value is something that its value should be something unique.</u></strong>&nbsp;
                Like in this case id, email Id, phon eno. could be used because these thins are always unique.&nbsp;
                <strong><i>You can not see this key component in React Dev Tools and can't access it using <u>props.key</u> in components</i></strong>
              </p>

              <ForOf />

        </header>

        <header id = 'emojipedia'>

        <div>
            <h1>
                <span>Emojipedia</span>
            </h1>

            <dl className = "dictionary">
                
              {
                emojisInfo.map ( function ( emojis ) {
                  return (
                    <Enter key = {emojis.id} emoji = {emojis.emoji} name = {emojis.name} meaning = {emojis.meaning} />
                    );
                  } 
                )
              }

            </dl>
          </div>
        </header>

        <header id = 'understanding-ternary'>

          {/* <LogIn>Log in</LogIn> */}
          
          {isLogedIn ? <LoggedIn /> : <LogIn>Log in</LogIn> }

          <hr />

          {c > 32 ? <LoggedIn /> : <LogIn>Log in</LogIn> }

        </header>

        <header id = "registration">
          
          <ToRegister isRegistered  = {ifRegistered} />
          <hr />
          <ToRegister isRegistered  = {ifRegistered2} />
          
        </header>

        <header id = "stateReact ">
          <Heading2 title = "states in react" />
          <p>The state is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders.</p>
          <RandomText>Drink some water</RandomText>

          <div id = "statesReact2">
            <WhyToLearnHooks />
          </div>
        </header>

        <header id = 'hooksTut'>
          <Heading2 title = "Hooks in ReactJS" />
          <p>
            <b>useState(): </b>It is a function that returns an array of length 2. [initial value, function boundDispatchAction]. <i>returns undefined if initial value is not given.</i>
          </p>
          <CountClicks />
        </header>
        {/* <br /> */}
        <header>
          <HooksPractice />
          <p>Testing Something Out</p>
          {/* <DisplayTime /> */}
          <VariableClassName minutes = "50" />
        </header>
        
        <header id = "destructured">
          <LearnToDestructure />
          <br />
          <CarsInfo />
        </header>

        <header id = "events1">
          <Heading2 title = "Event Handling and Forms in React" />
          <Subscribe />
          <ReactForm />
          <br />
          <FormsChallenge />
        </header>

        <Parent message = {'Child Node called me'} />

        <hr />

        <header>
          <Heading2 title = "useEffect hook" />
          <IntroTOUseState />
          <p>
            useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect. For example we're going to see Timer component for example.
          </p>
          {/* <Timer /> */}
          <Timer />
          <a href = "https://www.w3schools.com/react/react_useeffect.asp#:~:text=The%20useEffect%20Hook%20allows%20you,The%20second%20argument%20is%20optional." target = "blank">w3Schools reference</a>
          <p>
            This is not what we want. There are several ways to control when side effects run.
            We should always include the second parameter which accepts an array. We can optionally pass dependencies to useEffect in this array.
            Check example in count2 for single rendering.
          </p>
        </header>

        <header>
          <UseEffect2 />
          <DataFetch/>
        </header>

        <header>
          <span style={{color : "orangered", fontSize : "200%"}}>
            <Heading2 title = {"HTTP Get and Post Request in ReactJS"} />
            <p style = {{marginTop : "-54px", fontSize: "75%"}} >(using fetch)</p>
            <p>GET method already covered</p>
            <PostMethod />
          </span>
        </header>

        <header>
          <RouterInfo />
        </header>

        <Footer />
    </div>
  );
}

export default App;
