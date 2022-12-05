import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function LearnCLeanup() {
    const [size, setSize] = useState({
        height : window.screen.height,
        width : window.screen.width,
    });
    const {height, width} = size;
    
    const currentSize = (e) => {
        setSize({
            height: window.innerHeight,
            width: window.innerWidth
        })
    }

    useEffect(() => {
        window.addEventListener('resize', currentSize);
        
        return () => {
            window.removeEventListener('resize', currentSize);
        }
    })

  return (
    <div>
        Learn Cleanup here.<br />
        {/* timer going on as {timer} */}
        <p>current size is {width} x {height}</p>
    </div>
  )
}
