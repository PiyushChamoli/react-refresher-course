import { useEffect, useState } from "react";

const RestaurantMenu = () => {
  useEffect(() => {
    fetchMenu();
  }, []);
  const [resInfo, setResInfo] = useState([]);
  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9265132&lng=77.63615519999999&restaurantId=17310"
    );
    const json = await data.json();
    console.log(json);
  };
  return (
    <div>
      <h1>Restaurant Name</h1>
      <h2>Restaurant Menu</h2>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
      <li>Item 5</li>
    </div>
  );
};

export default RestaurantMenu;
