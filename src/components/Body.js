import RestaurantUI from "./RestaurantUI";
import resList from "./Mockdata";
import { useState, useEffect } from "react";
import Shimmer from "./ShimmerUI";

function filterRes(val, res) {
  console.log("searchText", val);
  console.log(res);
  let data = res.filter((r) => r.info.name.toLowerCase().includes(val));
  return data;
}

const Body = () => {
  // useState Hooks
  let [restaurantList, setRestaurantList] = useState(resList);
  let [searchText, setSearchText] = useState("");
  // useEffect Hook
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.041029329885028&lng=72.93475024402142&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await data.json();
    console.log("fetched data", json.data.cards);
  };
  // Conditional Rendering : restaurantList.length ? <Shimmer/> : (body);
  return (
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
      <button
        onClick={(e) => {
          console.log("event", e);
          let filteredRes = filterRes(searchText, resList);
          setRestaurantList(filteredRes);
          console.log("filteredResList", filteredRes); // logs the correct filtered result
        }}
      >
        Search Restaurant
      </button>
      <div className="flex">
        {restaurantList.map((restaurant) => (
          <RestaurantUI key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
