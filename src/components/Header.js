import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Heading = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header flex">
      <div className="logo-container">
        <img alt="logo" src={LOGO_URL} />
      </div>
      <ul className="nav-items flex">
        <li>Online Status: {onlineStatus ? "✅" : "❎"}</li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>Cart</li>
        <li>
          <button
            className="loginBtn"
            onClick={() =>
              loginBtn == "Login" ? setLoginBtn("Logout") : setLoginBtn("Login")
            }
          >
            {loginBtn}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Heading;
