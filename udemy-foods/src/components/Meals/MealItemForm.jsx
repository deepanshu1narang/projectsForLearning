import React from 'react';
import Input from '../UI/Input';
import classes from "./MealItemForm.module.css";

export default function MealItemForm(props) {

  const ordinaryButton= {
    backgroundColor: "inherit",
    border: "0px transparent solid",
    textAlign: "center",
    justifyContent: "center"
  }

  const input= {
    id: "amount" + props.inputId,
    type: "number",
    step: 1,
    value: props.quantity,
    readOnly: true,
    style: ordinaryButton
  };

  return (
    <form id={props.formId} className={classes.form}>
        <button id="decrease" onClick={props.toggle}>-</button>
        <Input input={input} />
        <button id="increase" onClick={props.toggle}>+</button>
    </form>
  )
}
