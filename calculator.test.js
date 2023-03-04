import { calculator } from "./calculator";

test("Expect 2 + 2 to equal 4", () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test("Expect 4 divided by 2 to equal 2", () => {
  expect(calculator.divide(4, 2)).toBe(2);
});

test("Expect 4 times 10 to be 40", () => {
  expect(calculator.multiply(4, 10)).toBe(40);
});

test("10 minus 8 should be 2", () => {
  expect(calculator.subtract(10, 8)).toBe(2);
});
