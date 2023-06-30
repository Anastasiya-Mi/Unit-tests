const { pushPoly, forEachPoly } = require("../src/00_utils");

function find(array, predicate) {
  let result;
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
      const value = Object.values(predicate);
      const key = Object.keys(predicate);
      forEachPoly(array, (element) => {
        for (let i = 0; i < value.length; i++) {
          const keyElements = key[i];
          if (element[keyElements] === value[i]) {
            pushPoly(newArray, element);
          }
          element = 0;
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
      result = newArray[0];
      return result;
    case "string":
      forEachPoly(array, (element) => {
        if (Object.hasOwn(element, predicate)) {
          pushPoly(newArray, element);
        }
        result = newArray[0];
        if (!Object.hasOwn(element, predicate)) {
          result = newArray;
        }
      });
      return result;
    default:
      return newArray;
  }
}

module.exports = find;
