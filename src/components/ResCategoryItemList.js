import { CDN_URL } from "../utils/constants";

const ResCategoryItemList = ({ items }) => {
  //   console.log(items);
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
              <p className="absolute bg-black p-1 text-white rounded-md bottom-[-10%] left-[30%]">
                Add+
              </p>
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
