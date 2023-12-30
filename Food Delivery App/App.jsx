import React from "react";
import ReactDOM from "react-dom/client";

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
const SearchBar = () => (
  <section className="search-bar-container">Search bar</section>
);
const RestaurantContainer = () => (
  <section className="restaurant-container">
    <RestaurantCard />
    <RestaurantCard />
    <RestaurantCard />
    <RestaurantCard />
    <RestaurantCard />
    <RestaurantCard />
    <RestaurantCard />
    <RestaurantCard />
  </section>
);

const RestaurantCard = () => (
  <div className="restaurant-card">
    <div className="restaurant-img-container">
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bb7ae131544c7d37e10fc5faf76f09d6"
        alt="restaurant-image"
      />
    </div>
    <div className="restaurant-info-div">
      <h3 className="restaurant-name">McDonald's</h3>
      <span className="restaurant-rating">4.4</span>
      <span className="restaurant-delivery-time">38 mins</span>
      <p>Burgers, Beverages, Cafe, Deserts</p>
    </div>
  </div>
);

const AppLayout = () => (
  <div className="app">
    <HeaderComponent />
    <SearchBar />
    <RestaurantContainer />
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
