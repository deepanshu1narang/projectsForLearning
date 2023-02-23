import React, { useState, useMemo } from 'react';

function slowFunction(num){
  console.log("calling slow function");
  for (let i=0; i<1000000000; i++){} // just to slow it
  return num*2;
}

export default function UseMemo1() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  // const doubleNumber = slowFunction(number); /// creates problem
  // we'll memoize its value
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black"
  }

  return (
    <div style={themeStyles}>
      intro
      <h1>Example not from udemy. ... random -- youtube</h1>
      <h4>
        Memoization is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again
      </h4>
      <h5>
        Memoizing in simple terms means memorizing or storing in memory. A memoized function is usually faster because if the function is called subsequently with the previous value(s), then instead of executing the function, we would be fetching the result from the cache.
      </h5>
      usage 
      <div>
        <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} /><br />
        <button onClick={() => setDark(prevDark => !prevDark)}>ChangeTheme</button>
        <div>{doubleNumber}</div>
      </div>
    </div>
  )
}
