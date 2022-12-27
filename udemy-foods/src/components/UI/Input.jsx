import React, {useState, useEffect} from 'react';
import classes from "./Input.module.css";

export default function Input(props) {
    const [labelClass, setLabelClass] = useState(false);

    const changeMyClass = () =>{
        setLabelClass(!labelClass)
    }

  return (
    <span className={classes.input}>
        {/* <label className={!labelClass ? classes.label : classes.labelAfterClick} htmlFor={props.input.id}>{props.label}</label> */}
        {/* <input value={props.quantity} className={!labelClass ? classes.inputBoxInactive : classes.inputBoxActive} {...props.input} onClick={changeMyClass} /> */}
        <input value={props.quantity} className={classes.normalInputBox} {...props.input} onClick={changeMyClass} />
    </span>
  )
}
