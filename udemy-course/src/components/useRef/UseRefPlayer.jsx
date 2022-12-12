import React from 'react'
import { useEffect } from 'react';
import { useState, useRef } from 'react';

export default function UseRefPlayer() {
    const [play, setPlay] =useState(true);
    const [position, setPosition] = useState("");

    const videoRef = useRef();

    const handlePlayPause =() => {
        setPlay(!play);
        console.log(videoRef.current.play());
    }
    
    useEffect(() => {
        console.log(play ? "play": "pause");
        play ? videoRef.current.play() : videoRef.current.pause();
    }, [play]);

    useEffect(() => {
        const video01 = document.getElementsByTagName("video")[0];
        const timeSkip  = (e) => {
            console.log(e.offsetX, e.offsetY);
            if(e.offsetX < video01.innerWidth/2.2){
                setPosition("left");
            }
            else if(e.offsetX > video01.innerWidth/1.8)
                setPosition("right");
            else
                setPosition("");
        };

        video01.addEventListener('dblclick', timeSkip); 
        
        return () => {
            video01.removeEventListener("dblclick", timeSkip);
        }

    }, [position]);

  return (
    <>
        <div id="useRefPlayer">
            <button>{play ? "pause" : "play"}</button>
            <p>{position}</p>
            <video ref={videoRef} onClick={handlePlayPause} width="40%" height="40%" controls>
                <source src="./videoReq.mp4" />
            </video>
        </div>
    </>
  )
}
