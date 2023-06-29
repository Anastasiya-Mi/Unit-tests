const compact = require("../src/02_compact");

describe("compact tests", () => {
  test("check is arguments entered", () => {
    expect(compact(["a", "b", "c", "d"])).toBeDefined();
  });
  test("Returns the filter array", () => {
    expect(compact([0, 1, false, 2, "", 3,-1])).toEqual([1, 2, 3, -1]);
  });
  test("Returns the filter array", () => {
    expect(compact(["a", "b", "c", "d"])).toEqual(["a", "b", "c", "d"]);
  });
  test("Returns the empty array if array empty", () => {
    expect(compact([])).toEqual([]);
  });
  test("Returns the empty array if argument is not an array", () => {
    expect(compact("aaaaa")).toEqual([]);
  });
  test("Returns an empty array if both arguments are invalid", () => {
    expect(compact()).toEqual([]);
  });
});
