import React from 'react'
import  ReactDOM from 'react-dom';

export default function Modal(props) {
  if(!props.open){
    return null;
  }
  else{
    return ReactDOM.createPortal (
        <div id="popup-dialog">
            {props.children}
            <button onClick={props.onClose}>Okay</button>
        </div>,
    document.getElementById("portal"));
  }
}
