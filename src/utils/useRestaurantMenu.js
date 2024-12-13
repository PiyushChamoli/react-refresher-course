import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  // useState Hook to keep local variable
  const [resInfo, setResInfo] = useState(null);
  // useEffect Hook to fetch data
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
  };
  // returning the local variable
  return resInfo;
};

export default useRestaurantMenu;
