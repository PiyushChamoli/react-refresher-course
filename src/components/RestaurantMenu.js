import Shimmer from "./ShimmerUI";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  // useEffect Hook
  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // useState Hook
  // const [resData, setResData] = useState(null);
  const [showIndex, setShowIndex] = useState(null);

  const { resId } = useParams();

  // custom hook useRestaurantMenu used according to Single Responsibility Principle
  const resInfo = useRestaurantMenu(resId);

  // Fetch Restaurant Menu (now delegated to custom hook useRestaurantMenu)
  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API + resId);
  //   const json = await data.json();
  //   setResData(json.data);
  // };

  if (resInfo == null) return <Shimmer />;

  const { name, costForTwoMessage, avgRating } =
    resInfo.cards[2].card.card.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (res) => {
        return (
          res?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );
  console.log("cat", categories);
  return (
    <div className="max-w-screen-md m-auto">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl">{name}</h1>
        <div className="flex justify-between items-center">
          <h3 className="font-semibold pr-4">{costForTwoMessage}</h3>
          <h2 className="font-semibold pr-4">⭐️ {avgRating}</h2>
        </div>
      </div>
      <h1 className="font-bold mt-12">Restaurant Menu</h1>
      <ul>
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category.card.card.title}
            data={category.card.card}
            showItems={showIndex === index}
            setShowIndex={() =>
              setShowIndex(showIndex === index ? null : index)
            }
          />
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
