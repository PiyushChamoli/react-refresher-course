import RestaurantUI from "./RestaurantUI";
import { useState, useEffect } from "react";
import { RESTAURANT_LIST } from "../utils/constants";
import Shimmer from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

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

  // checking online status with custom hook useOnlineStatus
  let status = useOnlineStatus();
  if (status === false)
    return <h1>Please check your Internet! You're offline!</h1>;

  // Conditional Rendering
  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="text-center">
      <input
        type="text"
        placeholder="What would you like to eat!"
        className=" inline-block py-2 px-3 m-2 text-sm shadow-lg bg-gray-100 min-w-52"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button
        className="shadow-lg py-2 px-3 bg-gray-100"
        onClick={filterRestaurants}
      >
        Search Restaurant
      </button>
      <div className="flex justify-between items-center flex-wrap">
        {filteredRestaurantList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantUI resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
