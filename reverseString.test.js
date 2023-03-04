import reverseString from "./reverseString";

test("James should be semaJ", () => {
  expect(reverseString("James")).toBe("semaJ");
});

test("cat should be tac", () => {
  expect(reverseString("cat")).toBe("tac");
});
