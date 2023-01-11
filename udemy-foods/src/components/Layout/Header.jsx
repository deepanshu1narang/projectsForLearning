import React, { useContext, useState } from "react";
// import LoaderModal from "../../Modals/LaoderModal";
import Modal from "../../Modals/Modal";
// import CartContext from "../../Store/CartContext";
import CartContextV1 from "../../Store/CartContextV1";
import Cart from "../Cart/Cart";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

export default function Header(props) {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // const contextCart = useContext(CartContext);
  const contextCartV1 = useContext(CartContextV1);

  // const numberOfCartItems = contextCartV1.items.reduce((currentNumber, item) => {
  //   return currentNumber + item.quantity;
  // }, 0);

  const numberOfCartItems = 5;

  const cartButtonHandler = () => {
    setCartIsOpen(true);
  };

  const confirmed = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setCartIsOpen(false);
    }, 5000);
  };

  const cancelled = (e) => {
    e.preventDefault();
    setCartIsOpen(false);
  };

  return (
    <React.Fragment>
      <header
        className={`${classes.header} ${classes["grid-container-header"]}`}
      >
        <h1 id="heading">Udemy Foods</h1>
        <HeaderCartButton
          cartButtonHandler={cartButtonHandler}
          itemsInCart={numberOfCartItems}
          cartIsOpen={cartIsOpen}
        />
        {cartIsOpen && (
          <Modal
            open={cartIsOpen}
            isLoading= {isLoading}
            onClose={() => {
              setCartIsOpen(false);
            }}
          >
            <p className={classes["cart-intro"]}>This is your cart info.</p>
            <Cart
              confirmed={confirmed}
              cancelled={cancelled}
              isConfirming={isLoading}
            />
          </Modal>
        )}

      </header>
    </React.Fragment>
  );
}
