function pick(object, value) {
  const result = {};
  if (Array.isArray(object) || typeof object !== "object") {
    return {};
  }
  switch (typeof value) {
    case "object":
      for (let i = 0; i < value.length; i++) {
        const currentKey = value[i];
        if (object.hasOwnProperty(currentKey)) {
          result[currentKey] = object[currentKey];
        }
      }
      return result;
    case "string":
      if (object.hasOwnProperty(value)) {
        result[value] = object[value];
        return result;
      }
    default:
      return {};
  }
}

module.exports = pick;
