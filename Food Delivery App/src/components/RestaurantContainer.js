import RestaurantCard from "./RestaurantCard";

import { resList } from "../utils/mockData";
import { useState, useEffect } from "react";
import { async } from "regenerator-runtime";
import { RESTAURANT_DATA_URL, MORE_RESTAURANTS_URL } from "../utils/constants";

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

    const correctCardObjectOfRestaurants = function () {
      return result?.data?.cards.filter((res) => {
        if (res.hasOwnProperty("card")) {
          if (res.card.hasOwnProperty("card")) {
            if (res.card.card.hasOwnProperty("gridElements")) {
              if (res.card.card.gridElements.hasOwnProperty("infoWithStyle")) {
                if (
                  res.card.card.gridElements.infoWithStyle.hasOwnProperty(
                    "restaurants"
                  )
                ) {
                  return true;
                }
              }
            }
          }
        }
      });
    };
    const finalResult =
      correctCardObjectOfRestaurants()[0]?.card?.card?.gridElements
        ?.infoWithStyle?.restaurants;

    setListOfRes(finalResult);
    setFilteredListOfRes(finalResult);
  };

  function filterTopRatedRestaurants() {
    let filteredData = listOfRes.filter((res) => {
      return res.info.avgRating > 4;
    });
    setFilteredListOfRes(filteredData);
  }

  function filterBasedOnSearch(text) {
    setSearchText(text);
    const filteredResult = listOfRes.filter((res) => {
      return res.info.name.toLowerCase().includes(text.toLowerCase());
    });
    setFilteredListOfRes(filteredResult);
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
        {filteredListOfRes.length === 0 ? (
          <h1>Loading...</h1>
        ) : (
          filteredListOfRes.map((res) => {
            return <RestaurantCard resData={res.info} key={res.info.id} />;
          })
        )}
      </section>
    </>
  );
};

export default RestaurantContainer;
