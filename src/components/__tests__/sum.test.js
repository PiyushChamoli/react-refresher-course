const { default: sum } = require("../sum");

test("Sum should calculation sum of two numbers", () => {
  const value = sum(10, 12);
  // assertion
  expect(value).toBe(22);
});
