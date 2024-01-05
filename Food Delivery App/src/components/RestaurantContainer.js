import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useState, useEffect } from "react";
import { async } from "regenerator-runtime";
import { RESTAURANT_DATA_URL } from "../utils/constants";

const RestaurantContainer = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    const data = await fetch(RESTAURANT_DATA_URL);
    const result = await data.json();

    setListOfRes(
      result?.data.cards[3].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  function filterData() {
    let filteredData = listOfRes.filter((res) => {
      return res.info.avgRating > 4;
    });

    setListOfRes(filteredData);
  }

  function filterBasedOnSearch(text) {
    const result = listOfRes.filter((res) => {
      return res.info.name.toLowerCase().includes(text.toLowerCase());
    });
    setSearchText(text);
    setFilteredRes(result);
  }

  return (
    <>
      <button className="filter-btn" onClick={() => filterData()}>
        Top Restaurants
      </button>
      <input
        type="text"
        className="search-text"
        value={searchText}
        onChange={(e) => filterBasedOnSearch(e.target.value)}
      ></input>
      <section className="restaurant-container">
        {filteredRes.map((res) => {
          return <RestaurantCard resData={res.info} key={res.info.id} />;
        })}
      </section>
    </>
  );
};

export default RestaurantContainer;
