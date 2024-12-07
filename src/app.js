import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider } from "react-router";

const AppLayout = () => {
  return (
    <div className="container">
      <Heading />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
