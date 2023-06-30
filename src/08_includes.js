const { includesPoly } = require("../src/00_utils");

function includes(collection, value, fromIndex) {
  if (!fromIndex) fromIndex = 0;
  if (!collection || value === undefined) {
    return false;
  }
  const typeOfCollection = typeof collection;
  switch (typeOfCollection) {
    case "object":
      if (Array.isArray(collection)) {
        return includesPoly(collection,value, fromIndex);
      } else {
        const keys = Object.keys(collection);
        const values = Object.values(collection);
        if (
            includesPoly(keys,value, fromIndex) ||
            includesPoly(values,value, fromIndex)
        ) {
          return true;
        }
      }
      return false;
    case "string":
      return includesPoly(collection,value, fromIndex);
  }
}

module.exports = includes;
