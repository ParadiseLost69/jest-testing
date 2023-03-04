import sum from "./add";

test("adds 2 plus 3 to equal 5", () => {
  expect(sum(3, 2)).toBe(5);
});
