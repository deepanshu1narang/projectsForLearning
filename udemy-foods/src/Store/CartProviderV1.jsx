import React from 'react';
import CartContextV1 from "./CartContextV1";

export default function CartProviderV1(props) {
  const random01 = "arbitrary for now";
  
  
  return (
    <CartContextV1.Provider value={random01}>
        {props.children}
    </CartContextV1.Provider>
  )
}
