import React, { useRef } from 'react';
import Input from '../UI/Input';
import classes from "./MealItemForm.module.css";

export default function MealItemForm(props) {
  const quantityInputRef = useRef();

  const input= {
    id: "quantity" + props.inputId,
    type: "number",
    step: 1,
    value: props.quantity,
    readOnly: true
  };

  return (
    <form id={props.formId} className={classes.form}>
        <button id="delete" onClick={props.toggle}>delete</button>
        <button id="decrease" onClick={props.toggle}>-</button>
        <Input ref={quantityInputRef} input={input} />
        <button id="increase" onClick={props.toggle}>+</button>
    </form>
  )
}
