const filter = require("../src/06_filter");
describe("filter tests", () => {
  const users = [
    { user: "barney", age: 36, active: true },
    { user: "fred", age: 40, active: false },
    { user: "viki", age: 36, active: true },
  ];
  test("check is arguments entered", () => {
    expect(filter(users, "1")).toBeDefined();
  });
  test("Returns the slice of array if predicate is function", () => {
    expect(
      filter(users, function (o) {
        return !o.active;
      })
    ).toEqual([{ user: "fred", age: 40, active: false }]);
  });
  test("Returns the slice of array if predicate is object", () => {
    expect(filter(users, { age: 36, active: true })).toEqual([
      { user: "barney", age: 36, active: true },
      { user: "viki", age: 36, active: true },
    ]);
  });
  test("Returns the slice of array if predicate is an array", () => {
    expect(filter(users, ["active", false])).toEqual([
      { user: "fred", age: 40, active: false },
    ]);
  });
  test("Returns an empty array if predicate is undefined", () => {
    expect(filter(users)).toEqual([]);
  });
  test("Returns the slice of array if predicate is string", () => {
    expect(filter(users, "active")).toEqual([
      { user: "barney", age: 36, active: true },
      { user: "viki", age: 36, active: true },
    ]);
  });
  test("Returns an empty array if argument is not an array ", () => {
    expect(filter("users")).toEqual([]);
  });
  test("Returns an empty array if arguments invalid ", () => {
    expect(filter()).toEqual([]);
  });
});
