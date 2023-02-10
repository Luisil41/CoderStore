import React from "react";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import CartList from "../CartList/CartList";

const Cart = () => {
    const { cart } = useContext(CartContext);
  return (
    <div>
      <h1>Here you find your products</h1>
      <CartList cart={cart}/>
    </div>
  );
};

export default Cart;
