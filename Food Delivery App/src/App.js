import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import RestaurantContainer from "./components/RestaurantContainer";

const SearchBar = () => (
  <section className="search-bar-container">Search bar</section>
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
