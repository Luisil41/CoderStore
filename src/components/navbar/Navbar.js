import React, { useState } from "react";
import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">Regular Riders</span>

      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home">Motorbikes</a>
        <a href="/about">Clothing</a>
        <a href="/service">Routes</a>
        <a href="/contact">Contact</a>
        <a href="/contact">FAQ</a>
      </div>

      <CartWidget />

      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
