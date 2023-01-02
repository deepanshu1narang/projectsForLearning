import React, {useState} from 'react';
import LoaderModal from '../../Modals/LaoderModal';
import Modal from '../../Modals/Modal';
import Cart from '../Cart/Cart';
import classes from "./Header.module.css"
import HeaderCartButton from './HeaderCartButton';

export default function Header(props) {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const cartButtonHandler = () => {
    setCartIsOpen(true);
  }

  const confirmed = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setCartIsOpen(false);
    }, 5000);
  }

  const cancelled = (e) => {
    e.preventDefault();
    setCartIsOpen(false);
  }

  return (
    <React.Fragment>
      <header className={`${classes.header} ${classes["grid-container-header"]}`}>
        <h1 id="heading">Udemy Foods</h1>
        <HeaderCartButton cartButtonHandler={cartButtonHandler} itemsInCart={0} cartIsOpen={cartIsOpen} />
        {
            cartIsOpen && 
            <Modal open={cartIsOpen} onClose={() => {setCartIsOpen(false)} }>
                <p className={classes['cart-intro']}>This is your cart info.</p>
                <Cart confirmed={confirmed} cancelled={cancelled} isConfirming={isLoading} />
            </Modal>
        }

        {
          isLoading && <LoaderModal isLoading={isLoading} />
        }

      </header>
    </React.Fragment>
  )
}

