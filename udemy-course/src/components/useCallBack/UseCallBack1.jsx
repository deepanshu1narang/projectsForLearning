import React, { useState, useCallBack } from 'react'
import List0121 from './List0121';

export default function UseCallBack1() {
  const [number, setNumber] = useState(1);
  const [red, setRed] = useState(false);

  const theme = {
    backgroundColor: red ? "red" : "white",
    color: red ? "white" : "red"
  }

  const getItems = useCallBack(() => {
    return [number, number+1, number+2];
  }, [number]);

  return (
    <div style={theme}>
      <h1>useCallBack</h1>
      <h4>The main difference between useMemo and useCallback hook is, useMemo returns memoized value and useCallback returns memoised function.</h4>
      <input type="number" onChange={(e) => setNumber(parseInt(e.target.value))} value={number} />
      <button onClick={() => setRed(red => !red)}>Toggle Theme</button>
      <List0121 getItems={getItems} />
    </div>
  )
}
