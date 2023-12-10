import React from "react";
import { SearchNormal1, Bag2, UserSquare } from "iconsax-react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
  
      <div className="logo">
        <h3>Furniture</h3> 
      </div>
      <div className="navlinks">
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Latest</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="icons">
        <SearchNormal1 size="20" color="#000000" />
        <Bag2 size="20" color="#000000" />
        <UserSquare size="20" color="#000000" />
      </div>
    </div>
  );
}

export default Navbar;
