import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ResCategoryItemList = ({ items }) => {
  //   console.log(items);
  const dispatch = useDispatch();
  const handleAddButton = (item) => {
    // console.log(item);
    dispatch(addItem(item));
  };
  return (
    <ul className="bg-gray-200 px-2">
      {items.map((item) => {
        return (
          <li
            key={item.card.info.id}
            className="pt-4 py-2 border-gray-50 border-b-2 flex justify-between"
          >
            <div className="w-10/12">
              <h3 className="">{item.card.info.name}</h3>
              <p>
                {" "}
                ₹
                {item.card.info.finalPrice / 100 ||
                  item.card.info.defaultPrice / 100 ||
                  item.card.info.price / 100}
              </p>
            </div>
            <div className="w-2/12 relative">
              <button
                onClick={() => handleAddButton(item)}
                className="absolute bg-black p-1 text-white rounded-md bottom-[-10%] left-[30%] cursor-pointer"
              >
                Add+
              </button>
              <img
                src={CDN_URL + item.card.info.imageId}
                className="w-auto"
                alt="image"
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ResCategoryItemList;
