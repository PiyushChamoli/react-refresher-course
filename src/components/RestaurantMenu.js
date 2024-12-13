import Shimmer from "./ShimmerUI";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  // useEffect Hook
  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // useState Hook
  // const [resData, setResData] = useState(null);

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
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  return (
    <div>
      <h1>{name}</h1>
      <h3>{costForTwoMessage}</h3>
      <h2>Average Rating: {avgRating}</h2>
      <h1>Restaurant Menu</h1>
      {itemCards.map((res) => (
        <li key={res.card.info.id}>{res.card.info.name}</li>
      ))}
    </div>
  );
};

export default RestaurantMenu;
