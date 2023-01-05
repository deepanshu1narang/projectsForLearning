import React from 'react';
import  ReactDOM from 'react-dom';
import classes from "./Modal.module.css";
import LoaderModal from "./LoaderModal";

export default function Modal(props) {
  if(!props.open){
    return null;
  }
  else{
    return ReactDOM.createPortal (
        <div className={classes["cart-popup"]}>
            {props.children}
            {props.isLoading && <LoaderModal isLoading={props.isLoading} />}
            <button className={classes.closeButton} onClick={props.onClose}>x</button>
        </div>,
    document.getElementById("portal"));
  }
}