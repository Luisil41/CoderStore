import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom"

const ItemDetail = ({ id, name, img, description, category, price, stock }) => {
  const [quantity, setQuantity] = useState(0);

  const handleOnAdd = (qty) => {
    setQuantity(qty);
  };
  return (
    <div>
      <h4>{name}</h4>
      <p>{category}</p>
      <img src={img} alt={name} style={{ width: 400 }} />
      <p>$ {price}</p>
      <p>{description}</p>
      {quantity > 0 ? (
        <Link> Finish Purchase </Link>
      ) : (
        <ItemCount stock={stock} onAdd={handleOnAdd} />
      )}
    </div>
  );
};

export default ItemDetail;
