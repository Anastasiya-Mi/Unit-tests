const {filterPoly,checkValue} = require("../src/00_utils");

function compact(array) {
  let result = [];
  if (Array.isArray(array)) {
    result = filterPoly(array,checkValue);
  }
  return result;
}
module.exports = compact;
