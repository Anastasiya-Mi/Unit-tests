const { pushPoly, forEachPoly } = require("../src/00_utils");

function filter(array, predicate) {
  const newArray = [];
  if (!Array.isArray(array) || !predicate) {
    return newArray;
  }
  const typeOfPredicate = typeof predicate;
  if (Array.isArray(predicate)) {
    const value = predicate[0];
    forEachPoly(array, (element) => {
      if (!element[value]) {
        pushPoly(newArray, element);
      }
    });
    return newArray;
  }
  switch (typeOfPredicate) {
    case "object":
      const value = Object.values(predicate)[1];
      const key = Object.keys(predicate)[1];
      forEachPoly(array, (element) => {
        if (element[key] === value) {
          pushPoly(newArray, element);
        }
      });
      return newArray;
    case "function":
      forEachPoly(array, (element) => {
        const result = predicate(element);
        if (result) {
          pushPoly(newArray, element);
        }
      });

      return newArray;
    case "string":
      forEachPoly(array, (element) => {
        if (element[predicate]) {
          pushPoly(newArray, element);
        }
      });
      return newArray;
    default:
      return newArray;
  }
}

module.exports = filter;
