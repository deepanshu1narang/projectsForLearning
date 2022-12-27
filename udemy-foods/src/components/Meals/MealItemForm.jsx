import React from 'react';
import Input from '../UI/Input';
import classes from "./MealItemForm.module.css";

export default function MealItemForm(props) {
  const input= {
    id: "amount" + props.inputId,
    type: "number",
    max: 10,
    step: 1,
    // defaultValue: props.quantity
  };

  return (
    <form className={classes.form}>
        <button id="decrease" onClick={props.toggle}>-</button>
        <Input label="Count:" input={input} />
        <button id="increase" onClick={props.toggle}>+</button>
    </form>
  )
}
