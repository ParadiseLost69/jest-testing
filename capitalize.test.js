import capitalize from "./capitalize";

test("wing will be Wing", () => {
  expect(capitalize("wing")).toBe("Wing");
});
test("NoThInG will be Nothing", () => {
  expect(capitalize("NoThInG")).toBe("Nothing");
});
