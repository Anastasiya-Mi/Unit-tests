const chunk = require("../src/01_chunk");
describe("chunk tests", () => {
  test("Returns a new array of chunks with even size", () => {
    expect(chunk(["a", "b", "c", "d"], 2)).toEqual([
      ["a", "b"],
      ["c", "d"],
    ]);
  });
  test("Returns a new array of chunks with odd size", () => {
    expect(chunk(["a", "b", "c", "d"], 3)).toEqual([["a", "b", "c"], ["d"]]);
  });
  test("Returns a new array of chunks with zero size", () => {
    expect(chunk(["a", "b", "c", "d"], 0)).toEqual(["a", "b", "c", "d"]);
  });
  test("check is arguments entered", () => {
    expect(chunk(["a", "b", "c", "d"], 2)).toBeDefined();
  });
  test("Returns a new array of chunks when the size is greater than the length of the array", () => {
    expect(chunk([], 5)).toEqual([]);
  });
  test("Returns a new array of chunks if the size is float", () => {
    expect(chunk([1, 2, 3, 4, 5], 1.5)).toEqual([[1, 2], [3, 4], [5]]);
  });
  test("Returns a new array of chunks if the size is negative", () => {
    expect(chunk([1, 2, 3, 4, 5], -2)).toEqual([[1, 2], [3, 4], [5]]);
  });
  test("Returns an array if size is not a number", () => {
    expect(chunk([1, 2, 3, 4, 5], "")).toEqual([1, 2, 3, 4, 5]);
  });
  test("Returns an array if size is not a number", () => {
    expect(chunk([1, 2, 3, 4, 5], undefined)).toEqual([1, 2, 3, 4, 5]);
  });
  test("Returns the empty array if first argument is not an array", () => {
    expect(chunk("aaaaa", 1)).toEqual([]);
  });
  test("Returns an empty array if both arguments are invalid", () => {
    expect(chunk("aaaaa", "a")).toEqual([]);
  });
  test("Returns an empty array if both arguments are invalid", () => {
    expect(chunk()).toEqual([]);
  });
});
