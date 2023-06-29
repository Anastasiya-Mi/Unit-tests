const {filterPoly} = require("../src/00_utils");

function compact(array) {
  let result = [];
  if (Array.isArray(array)) {
    result = filterPoly(array,(element) => !!element);
  }
  return result;
}
module.exports = compact;
