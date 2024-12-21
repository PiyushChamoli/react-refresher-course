import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Heading = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const data = useContext(UserContext);
  return (
    <div className="flex justify-between items-center">
      <div className="w-36">
        <img alt="logo" src={LOGO_URL} className="w-full" />
      </div>
      <ul className="flex">
        <li className="pl-8">Online Status: {onlineStatus ? "✅" : "❎"}</li>
        <li className="pl-8">
          <Link to="/">Home</Link>
        </li>
        <li className="pl-8">
          <Link to="/about">About Us</Link>
        </li>
        <li className="pl-8">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className="pl-8">Cart</li>
        <li className="pl-8">
          <button
            className=""
            onClick={() =>
              loginBtn == "Login" ? setLoginBtn("Logout") : setLoginBtn("Login")
            }
          >
            {loginBtn}
          </button>
        </li>
        <li className="pl-8 font-bold">{data.loggedInUser}</li>
      </ul>
    </div>
  );
};

export default Heading;
