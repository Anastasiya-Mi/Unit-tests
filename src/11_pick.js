function pick(object, value) {
  const result = {};
  if (Array.isArray(object) || typeof object !== "object") {
    return {};
  }
  switch (typeof value) {
    case "object":
      for (let i = 0; i < value.length; i++) {
        const currentKey = value[i];
        if (Object.hasOwn(object, currentKey)) {
          result[currentKey] = object[currentKey];
        }
      }
      return result;
    case "string":
      if (Object.hasOwn(object, value)) {
        result[value] = object[value];
        return result;
      }
    default:
      return {};
  }
}

module.exports = pick;
