import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ItemCart = ({ id, name, quantity, price }) => {

    const { removeItem } = useContext(CartContext);

  return (
    <article style ={{ display: 'flex', justifyContent: 'space-around', backgroundColor: 'grey' }}>
      <h3>{name}</h3>
      <h4>quantity: {quantity}</h4>
      <h4>Unit Price: ${price}</h4>
    <h4>Sub-Total: ${price * quantity}</h4>
    <button className="Option" style={{ backgroundColor: 'orange' }} onClick={() => removeItem(id)}>Remove</button>

    </article>
  );
};

export default ItemCart;
