import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';

export default function LogButtonClicks() {
    const countRef = useRef(0);
    // tut 2
    const [count, setCount] = useState(0);

    const handle = () => {
      countRef.current+=1;
      console.log(`button clicked ${countRef.current} times`);
    };

    const handle2 = () => {
      setCount(count+1);
    }
    
    useEffect(() => {
      console.log(`Clicked ${count} times`);
    }, [count]);

    console.log('I rendered');
  return (
    <React.Fragment>
        <h1>use case: logging button clicks</h1>
        <button onClick={handle}>CLick me</button>
        <p>Click this button to know difference b/w state and ref</p>
        <button onClick={handle2}>Click me 2</button>
    </React.Fragment>
  )
}