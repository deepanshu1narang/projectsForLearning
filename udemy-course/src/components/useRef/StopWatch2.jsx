import React, {useEffect, useState, useRef} from 'react'

export default function StopWatch2() {
    const timerIdRef = useRef(0);
    const [count, setCount] = useState(0);

    const startHandler = () => {
        if (timerIdRef.current) { return; }
        timerIdRef.current = setInterval(() => setCount(c => c+1), 1000);
        // console.log(timerIdRef);
    };

    const stopHandler = () => {
        clearInterval(timerIdRef.current);
        timerIdRef.current = 0;
    };

    useEffect(() => {
        return () => clearInterval(timerIdRef.current);
    }, []);

    // console.log("I rendered too");

  return (
    <div>
        <span>Timer: {count}s</span>
        <div>
            <button onClick={startHandler}>Start</button>
            <button onClick={stopHandler}>Stop</button>
        </div>
    </div>
  )
}
