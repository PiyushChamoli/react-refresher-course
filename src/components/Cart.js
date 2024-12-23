import { useDispatch, useSelector } from "react-redux";
import ResCategoryItemList from "./ResCategoryItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const handleClearButton = () => {
    dispatch(clearCart());
  };
  return (
    <div className="max-w-screen-md m-auto">
      <div className="text-center">
        <h1 className="font-bold text-2xl">Cart</h1>
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearButton}
        >
          Clear
        </button>
      </div>
      {cartItems.length === 0 && <h2>The Cart is empty!</h2>}
      <ResCategoryItemList items={cartItems} />
    </div>
  );
};

export default Cart;
