import React from 'react';
import classes from "./Cart.module.css";

export default function Cart(props) {
    const cartItems = ["random", 'items', "for", "now"];  

  return (
    <div className={classes["cart-container"]}>
        <ul className={classes["cart-container-items"]}>
            {
                cartItems.map((item, i) => {
                    return (
                        <li key={i} className={classes["cart-container-items-details"]}>
                            <div className={classes['item-name']}>{item}</div>
                            <div className={classes['item-quantity']}>{i}</div>
                        </li>
                    )
                })
            }
        </ul>
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>Rs. {54000}</span> {/* hardcoded for now */}
        </div>
        <div className={classes.actions}>
            <button disabled={props.isConfirming} className={classes['button-confirmed']} onClick={props.confirmed}>Confirm</button>
            <button className={classes['button-cancelled']} onClick={props.cancelled}>Close</button>
        </div>
    </div>
  )
}
