import React from "react";

const HeaderComponent = () => (
  <header className="nav-bar">
    <div className="logo-container">
      <h1 className="logo">Foodie</h1>
    </div>
    <div className="menu-container">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </header>
);

export default HeaderComponent;
