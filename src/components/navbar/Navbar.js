import React, { useContext } from "react";
import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const Navbar = () => {

  const { totalQuantity } = useContext(CartContext)

  return (
    <div className="Navbar">
      <span className="nav-logo">
        {" "}
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/California_125.svg/1200px-California_125.svg.png"
            style={{ width: 50 }}
            alt="web-logo"
          />
        </Link>
      </span>

      <Link to="/category/motorbikes" className="nav-logo-items">
        Motorbikes
      </Link>
      <Link to="/category/clothing" className="nav-logo-items">
        Clothing
      </Link>

      <CartWidget quantity={totalQuantity}/>
    </div>
  );
};

export default Navbar;
