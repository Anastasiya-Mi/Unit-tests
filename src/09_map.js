const { mapPoly } = require("../src/00_utils");

function map(collection, value) {
  switch (typeof value) {
    case "function":
      if (Array.isArray(collection)) {
        return mapPoly(collection, ((element) => value(element)));
      } else {
        const values = Object.values(collection);
        return mapPoly(values, ((element) => value(element)));
      }
    case "string":
      return mapPoly(collection, ((element) => element[value]));
    default:
      return [];
  }
}

module.exports = map;
