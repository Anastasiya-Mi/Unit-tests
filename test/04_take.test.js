const take = require("../src/04_take");

describe("take tests", () => {
  test("check is arguments entered", () => {
    expect(take([1, 2, 3], 2)).toBeDefined();
  });
  test("Returns the slice of array if count not entered", () => {
    expect(take([1, 2, 3])).toEqual([1]);
  });
  test("Returns the slice of array", () => {
    expect(take([1, 2, 3], 2)).toEqual([1, 2]);
  });
  test("Returns the slice of array if count more than array length", () => {
    expect(take([1, 2, 3], 5)).toEqual([1, 2, 3]);
  });
  test("Returns the slice of array if count equal to zero", () => {
    expect(take([1, 2, 3], 0)).toEqual([]);
  });
  test("Returns the slice of array if count and array length equal to zero", () => {
    expect(take([], 0)).toEqual([]);
  });
  test("Returns the slice of array if count less than zero", () => {
    expect(take([1, 2, 3, 4], -2)).toEqual([]);
  });
  test("Returns the slice of array if count not a number", () => {
    expect(take([1, 2, 3, 4], "dd")).toEqual([1]);
  });
  test("Returns an empty array  if array not an array", () => {
    expect(take("aaaaa", 1)).toEqual([]);
  });
  test("Returns the empty array if both argument invalid", () => {
    expect(take("aaaaa", "a")).toEqual([]);
  });
  test("Returns the empty array if both argument invalid", () => {
    expect(take()).toEqual([]);
  });
});
