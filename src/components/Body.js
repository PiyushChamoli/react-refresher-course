import RestaurantUI from "./RestaurantUI";
import resList from "./Mockdata";

const Body = () => {
  return (
    <div className="body flex">
      {resList.map((restaurant) => (
        <RestaurantUI key={restaurant.info.id} resData={restaurant} />
      ))}
    </div>
  );
};

export default Body;
