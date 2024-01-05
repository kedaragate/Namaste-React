import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useState, useEffect } from "react";
import { async } from "regenerator-runtime";
import { RESTAURANT_DATA_URL } from "../utils/constants";

const RestaurantContainer = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filteredListOfRes, setFilteredListOfRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    const data = await fetch(RESTAURANT_DATA_URL);
    const result = await data.json();

    setListOfRes(
      result?.data.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredListOfRes(
      result?.data.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  function filterTopRatedRestaurants() {
    let filteredData = listOfRes.filter((res) => {
      return res.info.avgRating > 4;
    });
    setListOfRes(filteredData);
  }

  function filterBasedOnSearch(text) {
    setSearchText(text);
    const filteredResult = listOfRes.filter((res) => {
      return res.info.name.toLowerCase().includes(text.toLowerCase());
    });
    setFilteredListOfRes(filteredResult);
  }

  if (listOfRes.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <button
        className="filter-btn"
        onClick={() => filterTopRatedRestaurants()}
      >
        Top Restaurants
      </button>
      <input
        type="text"
        className="search-text"
        value={searchText}
        onChange={(e) => {
          return filterBasedOnSearch(e.target.value);
        }}
      ></input>
      <section className="restaurant-container">
        {filteredListOfRes.map((res) => {
          return <RestaurantCard resData={res.info} key={res.info.id} />;
        })}
      </section>
    </>
  );
};

export default RestaurantContainer;
