import React, {useReducer} from 'react';

const initialState = 20;
const reducer = (state, action) =>  {
    // return newState by doing some action
    switch(action.type){
        case "increase":
          return (state >= 50 || state%1 !== 0) ? state : state + 1;
        case "decrease":
          return (state <= 0  || state%1 !== 0) ? state : state - 1;
        case "reset":
          return initialState;
        default:
          console.log("error");
          return Math.random()* + 100;
    }
}

const Counter1 = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    // const [state, dispatch] = useReducer(reducer, initialState, initialFunction);

  return (
    <div>
        <div>count = {state}</div>
        <button onClick={() => dispatch({type: "increase"})}>increase</button>
        <button onClick={() => dispatch({type: "decrease"})}>decrease</button>
        <button onClick={() => dispatch({type: "reset"})}>reset</button>
        <button onClick={() => dispatch({type: "error"})}>error</button>
    </div>
  )
}

export default Counter1
