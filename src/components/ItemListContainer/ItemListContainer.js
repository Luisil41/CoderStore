import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    document.title = "All the products";
  });

  useEffect(() => {
    (async () => {
      const productsRef = collection(db, "Items");

      try {
        const snapshot = await getDocs(productsRef)

        const productsAdapted = snapshot.docs.map(doc => {
          const fields = doc.data()

          return {id: doc.id, ...fields}
        })

        setProducts(productsAdapted)

      } catch (error) {
        console.log(error);
      }
    })();
  }, [categoryId]);

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
