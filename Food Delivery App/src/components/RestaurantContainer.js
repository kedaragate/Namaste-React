import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useState } from "react";

const RestaurantContainer = () => {
  const [listOfRes, setListOfRes] = useState(resList);

  function filterData() {
    let filteredData = listOfRes.filter((res) => {
      return res.info.avgRating > 4;
    });
    console.log(filteredData);
    setListOfRes(filteredData);
  }

  return (
    <section className="restaurant-container">
      <button className="filter-btn" onClick={() => filterData()}>
        Top Restaurants
      </button>
      {resList.map((res) => {
        return <RestaurantCard resData={res.info} />;
      })}
    </section>
  );
};

export default RestaurantContainer;
