import { useState, useRef } from 'react';

export default function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);
  
  
  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());
    
    clearInterval(intervalRef.current, "current");
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
    console.log("intervalRef====>", intervalRef, intervalRef.current);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <> 
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>
        Start
      </button>{" "}
      <button onClick={handleStop}>
        Stop
      </button>
    </>
  );
}

// git@github.com:deepanshu1narang/projectsForLearning.git