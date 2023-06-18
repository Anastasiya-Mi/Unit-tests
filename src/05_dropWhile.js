function dropWhile(array, predicate) {
  if (!Array.isArray(array) || !predicate) {
    return [];
  }
  const typeOfPredicate = typeof predicate;
  if (Array.isArray(predicate)) {
    const value = predicate[0];
    array.forEach((element) => {
      if (!element[value]) {
        array = array.slice(1);
      }
    });
    return array;
  }
  switch (typeOfPredicate) {
    case "object":
      const value = Object.values(predicate)[0];
      const key = Object.keys(predicate)[0];
      array.forEach((element) => {
        if (element[key] === value) {
          array = array.slice(1);
        }
      });
      return array;
    case "function":
      while (array.length > 0 && predicate(array[0])) {
        array = array.slice(1);
      }
      return array;
    case "string":
      array.forEach((element) => {
        if (!element.hasOwnProperty(predicate)) array = array.slice(1);
      });
      return array;
    default:
      return array;
  }
}

module.exports = dropWhile;
