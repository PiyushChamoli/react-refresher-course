import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "header", abc: "xyz" }, [
  "First line of react",
  React.createElement(
    "h2",
    { id: "sub-header", abc: "xyz" },
    "Child of header element"
  ),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
