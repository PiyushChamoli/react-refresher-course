import RestaurantUI from "./RestaurantUI";
import resList from "./Mockdata";
import { useState } from "react";

function filterRes(val, res) {
  console.log("searchText", val);
  console.log(res);
  let data = res.filter((r) => r.info.name.toLowerCase().includes(val));
  return data;
}

const Body = () => {
  let [restaurantList, setRestaurantList] = useState(resList);
  let [searchText, setSearchText] = useState("");
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
          e.preventDefault();
          let filteredRes = filterRes(searchText, restaurantList);
          setRestaurantList(filterRes);
          console.log("filteredResList", filteredRes);
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
