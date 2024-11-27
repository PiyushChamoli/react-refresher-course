import { CDN_URL } from "../utils/constants";

const RestaurantUI = (props) => {
  const { name, cloudinaryImageId, cuisines, costForTwo, avgRatingString } =
    props?.resData.info;
  return (
    <div className="res-body">
      <div className="res-img">
        <img src={CDN_URL + cloudinaryImageId} alt="Food Image" />
      </div>
      <h2>{name}</h2>
      <p>{cuisines.join(", ")}</p>
      <h3>{costForTwo}</h3>
      <p>{avgRatingString} average rating</p>
    </div>
  );
};

export default RestaurantUI;
