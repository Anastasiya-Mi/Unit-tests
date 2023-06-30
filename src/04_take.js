const { slicePoly } = require("../src/00_utils");

function take(array, countOfItems) {
  const start = 0;
  if (!(typeof countOfItems === "number") && Array.isArray(array)) {
    return slicePoly(array, start, start + 1);
  }
  if (!Array.isArray(array)) {
    return [];
  }
  return slicePoly(array, start, countOfItems);
}

module.exports = take;
