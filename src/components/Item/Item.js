import React from "react";
import { Link, useNavigate } from 'react-router-dom'

const Item = ({ id, name, img, price }) => {
  const navigate = useNavigate()
  return (
    <div onClick={()=> navigate(`/item/${id}`)}>
      <h4>{name}</h4>
      <img src={img} alt={name} style={{width: 200}}/>
      <p>$ {price}</p>
      <Link>See Details</Link>
    </div>
  );
};

export default Item;
