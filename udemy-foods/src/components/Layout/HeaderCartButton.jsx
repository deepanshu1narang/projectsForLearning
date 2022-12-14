import React from 'react';
import classes from './HeaderCartButton.module.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '../UI/Badge';
import  PropTypes  from 'prop-types';

export default function HeaderCartButton(props) {
  return (
    <button className={classes['cart-button']} onClick={props.cartButtonHandler} disabled={!props.modalIsOpen ? false : true}>
        <span>
            {/* <Badge>5</Badge> */}
            <Badge>{props.itemsInCart}</Badge>
            <ShoppingCartOutlinedIcon />
        </span>
        <div>
            <strong>Your Cart</strong>
        </div>
    </button>
  )
}

HeaderCartButton.propTypes ={
    itemsInCart : PropTypes.number
}