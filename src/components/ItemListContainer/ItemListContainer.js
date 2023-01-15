import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import { getProducts, getProductByCategory } from "../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    //Si hay categoryId hay que solicitar a la API los productos filtrados
    //Si no se da ese caso el usuario está en el home
    const asyncFunction = categoryId ? getProductByCategory : getProducts;

    asyncFunction(categoryId)
      .then((products) => {
        setProducts(products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryId]);

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
