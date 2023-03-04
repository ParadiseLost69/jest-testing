const divide = require("./divide");

test("Expects 6 divided by 2 to equal 3", () => {
  expect(divide(6, 2)).toBe(3);
});

test("expect one to be two", () => {
  let obj = { name: "teddy" };
  let obj2 = { name: "teddy" };

  expect(obj).toEqual(obj2);
});
