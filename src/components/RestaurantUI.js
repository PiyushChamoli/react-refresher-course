import { CDN_URL } from "../utils/constants";

const RestaurantUI = (props) => {
  // console.log("props", props);
  const { name, cloudinaryImageId, cuisines, costForTwo, avgRatingString } =
    props?.resData?.info;
  return (
    <div className="basis-[50%] flex-shrink grow-0 p-3 m-2 max-w-80 bg-gray-100 shadow-md">
      <div className="max-w-80">
        <img
          className="w-auto"
          src={CDN_URL + cloudinaryImageId}
          alt="Food Image"
        />
      </div>
      <h2>{name}</h2>
      <p>{cuisines.join(", ")}</p>
      <h3>{costForTwo}</h3>
      <p>{avgRatingString} average rating</p>
    </div>
  );
};

// Higher Order Component (FEATURE REDUNDANT)

// input - restaurantUI => output - restaurantUIPromoted

export const withPromotedLabel = (RestaurantUI) => {
  return (props) => {
    return (
      <>
        <label>Promoted</label>
        <RestaurantUI {...props} />
      </>
    );
  };
};

export default RestaurantUI;
