import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react'

export default function AccessingDomElement() {
    const elementRef = useRef();

    useEffect(() => {
        const divElement = elementRef.current;
        console.log(elementRef, divElement, divElement.current);
    }, []);

  return (
    <div ref={elementRef}>
      I am an element <span>With a span</span>
    </div>
  )
}
