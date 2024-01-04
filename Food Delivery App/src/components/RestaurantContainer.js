import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useState, useEffect } from "react";
import { async } from "regenerator-runtime";
import { RESTAURANT_DATA_URL } from "../utils/constants";

const RestaurantContainer = () => {
  const [listOfRes, setListOfRes] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    const data = await fetch(RESTAURANT_DATA_URL);
    const result = await data.json();

    setListOfRes(
      result?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  function filterData() {
    let filteredData = listOfRes.filter((res) => {
      return res.info.avgRating > 4;
    });

    setListOfRes(filteredData);
  }

  return (
    <>
      <button className="filter-btn" onClick={() => filterData()}>
        Top Restaurants
      </button>
      <section className="restaurant-container">
        {listOfRes.map((res) => {
          return <RestaurantCard resData={res.info} key={res.info.id} />;
        })}
      </section>
    </>
  );
};

export default RestaurantContainer;
