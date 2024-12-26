import { render, screen } from "@testing-library/react";
import RestaurantUI from "../RestaurantUI";
import RestaurantUIMockData from "../mocks.js/RestaurantUIMockData";
import "@testing-library/jest-dom";

it("Should render RestaurantUI with props data", () => {
  render(<RestaurantUI resData={RestaurantUIMockData} />);

  const resName = screen.getByText("Pizza Hut");
  expect(resName).toBeInTheDocument();
});
