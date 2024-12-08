import RestaurantUI from "./RestaurantUI";
import resList from "./Mockdata";
import { useState, useEffect } from "react";
import { RESTAURANT_LIST } from "../utils/constants";
import Shimmer from "./ShimmerUI";

const Body = () => {
  // useState Hooks
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");

  // useEffect Hook
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const fetchData =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log("Fetched Data", fetchData);
    setRestaurantList(fetchData);
    setFilteredRestaurantList(fetchData);
  };

  // Filter restaurants by search text
  const filterRestaurants = () => {
    const filtered = restaurantList.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurantList(filtered);
  };

  // Conditional Rendering
  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <input
        type="text"
        placeholder="What would you like to eat!"
        className="inp-box"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button onClick={filterRestaurants}>Search Restaurant</button>
      <div className="flex">
        {filteredRestaurantList.map((restaurant) => (
          <RestaurantUI key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
