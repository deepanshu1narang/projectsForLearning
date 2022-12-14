import React, {useReducer} from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

const initialState = {
    firstCounter: 0,
    secondCounter: 100,
    errorThrown: false
}

const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case "increase":
            if(!state.errorThrown)
                return {...state, firstCounter : state.firstCounter + action.value, errorThrown: false};
            else
                return {firstCounter: NaN, errorThrown: true};
        case "decrease":
            if(!state.errorThrown)
                return {...state, firstCounter : state.firstCounter - action.value, errorThrown: false};
            else
                return {...state, firstCounter: NaN, errorThrown: true};
        case "pnToggle":
            if(!state.errorThrown)
                return {...state, firstCounter : state.firstCounter * -1, errorThrown: false};
            else
                return {...state, firstCounter: NaN, errorThrown: true};
        case "reset":
            return initialState;
            // if(!state.errorThrown)
            //     return {firstCounter: initialState.firstCounter, errorThrown: false};
            // else
            //     return {errorThrown: false, firstCounter: initialState.firstCounter};
        case "multiply":
            if(!state.errorThrown)
                return {...state, firstCounter: state.firstCounter * action.value, errorThrown: false};
            else
                return {firstCounter: NaN, errorThrown: true}
        case "error":
            return {...state, errorThrown: true, firstCounter: NaN}
        default:
            if(!state.errorThrown)
                return {...state, firstCounter: Math.random()*200 - 100, errorThrown: false};
            else
                return {firstCounter: NaN, errorThrown: true};
    }
}

export default function Counter2() {
    
    const [state, dispatch] = useReducer(reducer, initialState);
    const [message, setMessage] = useState("");

    const messageRef = useRef("no message");

    useEffect(() => {
        const eventListenerMessage =() => {console.log("event listener working on ref: without refresh: yes, with refresh: yes")}
        if(message.trim().length > 0){
            setTimeout(() => setMessage(""), 9000);
            console.log(messageRef);
            console.log(messageRef.current);
            console.log(messageRef.current.innerText);
            messageRef.current.addEventListener("click", eventListenerMessage);

            return () => messageRef.current.removeEventListener("click", eventListenerMessage);
        }
    }, [message]);

  return (
    <div>
      <h3>Going to use state object and action object</h3>
      <p>Two counters at a same time but not simultaneously</p>
      <button className='counter02' onClick={() => {setMessage("toggling counter1 and counter2 under construction for now and trynna make messageRef usable too")}}>{"counter 1 ->"} {state.firstCounter}</button>
      <button className='counter02' onClick={() => {setMessage("counter2 under construction for now and trynna make messageRef usable too")}}>{"counter 2 ->"} {state.secondCounter}</button>
      <p style={{margin: "0px"}} ref={messageRef}>{message}</p>

      <div>
        <button onClick={() => {dispatch({type: "increase", value: 1})}}>increase</button>
        {/* inside dispatch an object is there, that is the action object */}
        <button onClick={() => {dispatch({type: "decrease", value: 1})}}>decrease</button>
        <button onClick={() => {dispatch({type: "reset"})}}>reset</button>
        <button onClick={() => {dispatch({type: "increase", value: 5})}}>increase 5</button>
        <button onClick={() => {dispatch({type: "decrease", value: 5})}}>decrease 5</button>
        <button onClick={() => {dispatch({type: "multiply", value: 2})}}>double</button>
        <button onClick={() => {dispatch({type: "multiply", value: 2})}}>double</button>
        <button onClick={() => {dispatch({type: "multiply", value: 3})}}>triple</button>
        <button onClick={() => {dispatch({type: "multiply", value: 4})}}>4x</button>
        <button onClick={() => {dispatch({type: "multiply", value: 5})}}>5x</button>
        <button onClick={() => {dispatch({type: "error"})}}>error</button>
        <button onClick={() => {dispatch({type: "random1"})}}>random1</button>
        <button onClick={() => {dispatch({type: "random2"})}}>random2</button>
        <button onClick={() => {dispatch({type: "pnToggle"})}}>change the sign</button>
      </div>
    </div>
  )
}
