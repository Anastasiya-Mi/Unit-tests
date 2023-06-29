const { slicePoly, forEachPoly } = require("../src/00_utils");

function dropWhile(array, predicate) {
  if (!Array.isArray(array) || !predicate) {
    return [];
  }
  const typeOfPredicate = typeof predicate;
  if (Array.isArray(predicate)) {
    const value = predicate[0];
    forEachPoly(array, (element) => {
      if (!element[value]) {
        array = slicePoly(array, 1);
      }
    });
    return array;
  }
  switch (typeOfPredicate) {
    case "object":
      const value = Object.values(predicate)[0];
      const key = Object.keys(predicate)[0];
      forEachPoly(array, (element) => {
        if (element[key] === value) {
          array = slicePoly(array, 1);
        }
      });
      return array;
    case "function":
      while (array.length > 0 && predicate(array[0])) {
        array = slicePoly(array, 1);
      }
      return array;
    case "string":
      forEachPoly(array, (element) => {
        if (!Object.hasOwn(element, predicate)) array = array.slice(1);
      });
      return array;
    default:
      return array;
  }
}

module.exports = dropWhile;
