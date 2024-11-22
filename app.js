import React from "react";
import ReactDOM from "react-dom";

const Heading = () => <h1 className="head">First Heading in JSX</h1>;

const Main = () => (
  <div className="container">
    <Heading />
    <p>lorem ipsum dolor sit amet</p>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Main />);
