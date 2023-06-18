function filter(array, predicate) {
  const newArray = [];
  if (!Array.isArray(array) || !predicate) {
    return newArray;
  }
  const typeOfPredicate = typeof predicate;
  if (Array.isArray(predicate)) {
    const value = predicate[0];
    array.forEach((element) => {
      if (!element[value]) {
        newArray.push(element);
      }
    });
    return newArray;
  }
  switch (typeOfPredicate) {
    case "object":
      const value = Object.values(predicate)[1];
      const key = Object.keys(predicate)[1];
      array.forEach((element) => {
        if (element[key] === value) {
          newArray.push(element);
        }
      });
      return newArray;
    case "function":
      array.forEach((element) => {
        const result = predicate(element);
        if (result) {
          newArray.push(element);
        }
      });

      return newArray;
    case "string":
      array.forEach((element) => {        
        if (element[predicate]) {
          newArray.push(element);
        }
      });
      return newArray;
    default:
      return newArray;
  }
}

module.exports = filter;
