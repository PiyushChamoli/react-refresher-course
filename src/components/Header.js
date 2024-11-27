import { LOGO_URL } from "../utils/constants";

const Heading = () => {
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
      </ul>
    </div>
  );
};

export default Heading;
