import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ id, name, img, description, category, price, stock }) => {
  const [quantity, setQuantity] = useState(0);

  const { addItem } = useContext(CartContext)

  const handleOnAdd = (quantity) => {
    console.log('I have adde to cart: ', quantity)
    setQuantity(parseInt(quantity))

    addItem({ id, name, quantity, price })
  };
  return (
    <div>
      <h4>{name}</h4>
      <p>{category}</p>
      <img src={img} alt={name} style={{ width: 400 }} />
      <p>$ {price}</p>
      <p>{description}</p>
      {quantity > 0 ? (
        <Link to='/cart' className="Option"> Finish Purchase </Link>
      ) : (
        <ItemCount stock={stock} onAdd={handleOnAdd} />
      )}
    </div>
  );
};

export default ItemDetail;
