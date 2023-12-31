import React from "react";

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

export default RestaurantCard;
