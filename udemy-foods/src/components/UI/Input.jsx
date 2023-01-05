import React from 'react';
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {


  return (
    <span className={classes.input}>
        <input value={props.value} className={classes.normalInputBox} {...props.input} />
    </span>
  )
});

export default Input;