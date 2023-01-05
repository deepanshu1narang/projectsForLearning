import React, { useRef, useImperativeHandle } from "react";

 const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const focusIt = ()  =>{
    inputRef.current.focus();
  }

  const trial = (message) => {
    console.log("success", message);
  }

  useImperativeHandle(
    // first
    ref,

    // second arg is a function that returns an object that contains all the data that can be used from outside
    () => {
      // second.... 
      return {
        // any name: the internal function (ie inside of Input Component) we need to use from outside
        activate: focusIt,
        trial: trial
      };
    }
  );

  return (
    <div className={props.className}>
      <label htmlFor={props.htmlFor}>{props.inputLabel}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;

// forwardRef returns a component 