import React, {useReducer}  from "react";
import CartContext from "./CartContext";

const ACTIONS = {
    ADD_ITEM: "add_item",
    REMOVE_ITEM: "remove_item"
};

const initialCartState = {
    items: [],
    totalQuantity: 0
}

const cartReducer = (state, action) => {
    if(action.type=== ACTIONS.ADD_ITEM){
        const updatedItems = state.items.concat(action.payload.item);
        const updatedTotalQuantity = state.totalQuantity + action.payload.item.price * action.payload.item.quantity;
        return{
            items: updatedItems,
            totalQuantity: updatedTotalQuantity
        };
    }
    return initialCartState;
};

export default function CartProvider(props) {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, initialCartState);

  function addItemToCartHandler(item) {
    dispatchCartAction({type: ACTIONS.ADD_ITEM, payload: {item: item}})
  }

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({type: ACTIONS.REMOVE_ITEM, payload: {id: id}})
  };

  const cartContext = {
    items: cartState.items,
    totalQuantity: cartState.totalQuantity,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
}
