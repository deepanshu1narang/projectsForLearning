import React, { useContext, useState } from "react";
// import LoaderModal from "../../Modals/LaoderModal";
import Modal from "../../Modals/Modal";
import CartContext from "../../Store/CartContext";
import Cart from "../Cart/Cart";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

export default function Header(props) {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const contextCart = useContext(CartContext);

  const numberOfCartItems = contextCart.items.reduce((currentNumber, item) => {
    return currentNumber + item.quantity;
  }, 0);

  const cartButtonHandler = () => {
    setCartIsOpen(true);
  };

  const confirmed = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setCartIsOpen(false);
    }, 6000);
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
            {/* {isLoading && <LoaderModal isLoading={isLoading} />} */}
            <Cart
              confirmed={confirmed}
              cancelled={cancelled}
              isConfirming={isLoading}
            />
          </Modal>
        )}

        {/* {isLoading && <LoaderModal isLoading={isLoading} />} */}
      </header>
    </React.Fragment>
  );
}
