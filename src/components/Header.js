import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Heading = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  return (
    <div className="header flex">
      <div className="logo-container">
        <img alt="logo" src={LOGO_URL} />
      </div>
      <ul className="nav-items flex">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
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
