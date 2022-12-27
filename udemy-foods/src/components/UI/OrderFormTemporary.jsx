import React from 'react'

export default function OrderFormTemporary(props) {
  return (
    <div>
        <button id="decrease" onClick={props.toggle}>-</button>
        {props.quantity}
        <button id="increase" onClick={props.toggle}>+</button>
    </div>
  )
}
