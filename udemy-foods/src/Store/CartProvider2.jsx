import React, { useReducer } from "react";
import CartContext from "./CartContext";

const ACTIONS = {};

const initialCartItems = {
  items: [],
  totalAmount: 0,
  addItem: function (item) {},
  removeItem: (id) => {},
};

function cartReducer(items, action){
    switch(action.type){
        case ACTIONS:
            return
        default:
            return
    }
}

export default function CartProvider2(props) {

    const [cartItems, dispatchCart] = useReducer(cartReducer, initialCartItems);


  return (
    <CartContext.Provider>
        {props.children}
    </CartContext.Provider>
  );
}
