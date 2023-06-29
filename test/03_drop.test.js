const drop = require("../src/03_drop");

describe("drop tests", () => {
  test("check is arguments entered", () => {
    expect(drop([1, 2, 3], 2)).toBeDefined();
  });
  test("Returns the slice of array if count not entered", () => {
    expect(drop([1, 2, 3])).toEqual([2, 3]);
  });
  test("Returns the slice of array", () => {
    expect(drop([1, 2, 3], 2)).toEqual([3]);
  });
  test("Returns the slice of array if count more than array length", () => {
    expect(drop([1, 2, 3], 5)).toEqual([]);
  });
  test("Returns the slice of array if count equal to zero", () => {
    expect(drop([1, 2, 3], 0)).toEqual([1, 2, 3]);
  });
  test("Returns the slice of array if count and array length equal to zero", () => {
    expect(drop([], 0)).toEqual([]);
  });
  test("Returns the slice of array if count less than zero", () => {
    expect(drop([1, 2, 3, 4], -2)).toEqual([3, 4]);
  });
  test("Returns the slice of array if count not a number", () => {
    expect(drop([1, 2, 3, 4], "dd")).toEqual([2, 3, 4]);
  });
  test("Returns an empty array  if array not an array", () => {
    expect(drop("aaaaa", 1)).toEqual([]);
  });
  test("Returns the empty array if both argument invalid", () => {
    expect(drop("aaaaa", "a")).toEqual([]);
  });
  test("Returns the empty array if both argument invalid", () => {
    expect(drop()).toEqual([]);
  });
});
