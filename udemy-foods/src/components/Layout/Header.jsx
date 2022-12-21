import React from 'react';
import classes from "./Header.module.css"
import HeaderCartButton from './HeaderCartButton';

export default function Header(props) {

    const cartButtonHandler = () => {console.log("your cart contains nothing as of now")}

  return (
    <React.Fragment>
      <header className={`${classes.header} ${classes["grid-container-header"]}`}>
        <h1 id="heading">Udemy Foods</h1>
        <HeaderCartButton cartButtonHandler={cartButtonHandler} itemsInCart={0} />
      </header>
    </React.Fragment>
  )
}

