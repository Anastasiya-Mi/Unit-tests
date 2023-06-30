const { includesPoly, indexOfPoly, splicePoly } = require("../src/00_utils");

function omit(object, value) {
  const result = {};
  if (Array.isArray(object) || typeof object !== "object") {
    return {};
  }
  if (Array.isArray(value) || typeof value === "string") {
    if (typeof value === "string") {
      value = Array.of(value);
    }
    const currentValue = Object.values(object);
    const currentKey = Object.keys(object);
    for (let i = 0; i < currentKey.length; i++) {
      const key = value[i];
      const checkValue = includesPoly(currentValue,key);
      const checkKey = includesPoly(currentKey,key);
      if (checkKey || checkValue) {
        const indexKey = indexOfPoly(currentKey,key);
        const indexValue = indexOfPoly(currentValue,key);
        if (indexValue !== -1) {
          splicePoly(currentKey,indexValue, 1);
          splicePoly(currentValue,indexValue, 1);          
        }
        if (indexKey !== -1) {
          splicePoly(currentKey,indexKey, 1);
          splicePoly(currentValue,indexKey, 1);
        }
      }
    }
    for (let i = 0; i < currentValue.length; i++) {
      const newValue = currentValue[i];
      const newKey = currentKey[i];
      result[newKey] = newValue;
    }
  }
  return result;
}


module.exports = omit;