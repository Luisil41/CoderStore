import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import React from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const { productId } = useParams();

  useEffect(() => {
    document.title = "Product detail";
  });

  useEffect(() => {
    (async () => {
      const productRef = doc(db, "Items", productId);

      try {
        const snapshot = await getDoc(productRef);

        const fields = snapshot.data();
        const productAdapted = { id: snapshot.id, ...fields };

        setProduct(productAdapted);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [productId]);

  return (
    <div>
      <h1>Product Specifications</h1>
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;
