function map(collection, value) {  
  switch (typeof value) {
    case "function":
      if (Array.isArray(collection)) {
        return collection.map((element) => value(element));
      } else {
        const values = Object.values(collection);
        return values.map((element) => value(element));
      }
    case "string":
      return collection.map((element) => element[value]);
    default:
      return [];
  }
}

module.exports = map;
