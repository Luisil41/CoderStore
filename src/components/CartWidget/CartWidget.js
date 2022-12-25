import React from "react";
import './CartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
  return (
    <div style={{margin: '20px'}}>
      <FontAwesomeIcon icon={faCartShopping} size="2x" color="black" /> 0
    </div>
  );
};

export default CartWidget;
