import { useParams } from "react-router-dom";
import { getProductById } from "../asyncMock";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import React from "react";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    getProductById(productId).then((product) => {
        setProduct(product)
    })
    .catch(error => {
        console.log(error)
    })
  }, [productId]);

  return (
    <div>
      <h1>Product Specifications</h1>
      <ItemDetail {...product}/>
    </div>
  );
};

export default ItemDetailContainer;
