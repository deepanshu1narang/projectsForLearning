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
    };

    const handle2 = () => {
      setCount(count+1);
    }
    
    useEffect(() => {
    }, [count]);

  return (
    <React.Fragment>
        <h1>use case: logging button clicks</h1>
        <button onClick={handle}>Click me</button>
        <p>clicked {countRef.current} times using ref</p>
        <p>Click this button to know difference b/w state and ref and will update the count when rendering happens</p>
        <button onClick={handle2}>Click me 2</button>
        <p>clicked {count} times using state</p>
    </React.Fragment>
  )
}