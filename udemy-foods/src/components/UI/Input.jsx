import React, {useState} from 'react';
import classes from "./Input.module.css";

export default function Input(props) {
    const [labelClass, setLabelClass] = useState(false);

    const changeMyClass = () =>{
        setLabelClass(!labelClass)
    }

  return (
    <span className={classes.input}>
        <input value={props.quantity} className={classes.normalInputBox} {...props.input} onClick={changeMyClass} />
    </span>
  )
}
