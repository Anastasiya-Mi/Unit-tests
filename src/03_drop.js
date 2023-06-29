const { slicePoly } = require("../src/00_utils");

function drop(array, countOfItems=1) {
  if (!Array.isArray(array)) {
    return [];
  } 
  const end = array.length;
  if (!(typeof countOfItems === "number") && Array.isArray(array)) {
    const start = 1;
    return slicePoly(array,start, end);
  }
  return slicePoly(array,countOfItems, end);
}

module.exports = drop;
