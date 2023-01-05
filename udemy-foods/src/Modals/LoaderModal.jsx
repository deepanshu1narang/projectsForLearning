import React from 'react';
import ReactDOM from 'react-dom';
import loader from "../assets/Bean_Eater_Loader.gif";
import classes from "./LoaderModal.module.css";

export default function LoaderModal(props) {
    if(props.isLoading){
      return ReactDOM.createPortal (
          <div className={classes.loading}>
              <img src={loader} alt="loading" />
          </div>,
      document.getElementById("portal"));
    }
    else{
        return null;
    }
  }
