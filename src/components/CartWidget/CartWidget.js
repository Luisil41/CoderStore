import React from "react";
import './CartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'

const CartWidget = ({ quantity }) => {
  return (
    <Link to ='/cart' style={{margin: '20px'}}>
      <FontAwesomeIcon icon={faCartShopping} size="2x" color="black" /> { quantity }
    </Link>
  );
};

export default CartWidget;
