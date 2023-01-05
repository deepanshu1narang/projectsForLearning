import React from 'react';
import classes from "./Cart.module.css";

export default function Cart(props) {
    const cartItems1 = [{name: "random", quantity: 2, cost: 300}, {name: 'items', quantity: 1, cost: 200}, {name: "for", quantity: 6, cost: 100}, {name:"now", quantity: 5, cost: 400}];

  return (
    <div className={classes["cart-container"]}>

        <ul className={classes["cart-container-items"]}>
            <li className={classes["cart-container-items-details"]}>
                <div className={classes['item-name']}><strong>Meal</strong></div>
                <div className={classes['item-quantity']}><strong>Quantity</strong></div>
                <div className={classes['each-item-cost']}><strong>Cost per Item</strong></div>
                <div className={classes['item-cost']}><strong>Total Cost</strong></div>
            </li>
        </ul>

        <ul className={classes["cart-container-items"]}>
            {
                cartItems1.map((item, i) => {
                    return (
                        <li key={i} className={classes["cart-container-items-details"]}>
                            <div className={classes['item-name']}>{item.name}</div>
                            <div className={classes['item-quantity']}>{item.quantity}</div>
                            <div className={classes['each-item-cost']}>{item.cost}</div>
                            <div className={classes['item-cost']}>{item.quantity * item.cost}</div>
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
