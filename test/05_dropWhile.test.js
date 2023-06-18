const dropWhile = require("../src/05_dropWhile");
describe("dropWhile tests", () => {
  const users = [
    { user: "barney", active: false },
    { user: "fred", active: false },
    { user: "pebbles", active: true },
  ];
  test("check is arguments entered", () => {
    expect(dropWhile(users, "1")).toBeDefined();
  });
  test("Returns the slice of array if predicate is function", () => {
    expect(
      dropWhile(users, function (o) {
        return !o.active;
      })
    ).toEqual([{ user: "pebbles", active: true }]);
  });
  test("Returns the slice of array if predicate is object", () => {
    expect(dropWhile(users, { user: "barney", active: false })).toEqual([
      { user: "fred", active: false },
      { user: "pebbles", active: true },
    ]);
  });
  test("Returns the slice of array if predicate is an array", () => {
    expect(dropWhile(users, ["active", false])).toEqual([
      { user: "pebbles", active: true },
    ]);
  });
  test("Returns an empty array if predicate is undefined", () => {
    expect(dropWhile(users)).toEqual([]);
  });
  test("Returns the slice of array if predicate is string", () => {
    expect(dropWhile(users, "active")).toEqual([
      { user: "barney", active: false },
      { user: "fred", active: false },
      { user: "pebbles", active: true },
    ]);
  });
  test("Returns an empty array if argument is not an array ", () => {
    expect(dropWhile("users")).toEqual([]);
  });
});
