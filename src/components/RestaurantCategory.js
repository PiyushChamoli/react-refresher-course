import { useState } from "react";
import ResCategoryItemList from "./ResCategoryItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  //   console.log(data);
  // useState used before lifting state
  // const [showItems, setShowItems] = useState(false);
  // const handleClick = () => {
  //   // setShowItems(!showItems);
  // };
  return (
    <li className="bg-gray-100 shadow-md my-6">
      <div
        className="flex justify-between py-4 px-2 cursor-pointer"
        onClick={setShowIndex}
      >
        <h3>
          {data.title} ({data.itemCards.length})
        </h3>
        <span>{showItems ? "⬆️" : "⬇️"}</span>
      </div>

      <div
        className={`transition-all duration-500 ease-in-out ${
          showItems
            ? "max-h-[600px] opacity-100 overflow-y-auto"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        {showItems && <ResCategoryItemList items={data.itemCards} />}
      </div>
    </li>
  );
};

export default RestaurantCategory;
