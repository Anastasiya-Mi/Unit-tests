function omit(object, value) {
  const result = {};
  if (Array.isArray(object) || typeof object !== "object") {
    return {};
  }
  if (Array.isArray(value) || typeof value === "string") {
    if (typeof value === "string") {
      value = value.split(' ');
    }
    const currentValue = Object.values(object);
    const currentKey = Object.keys(object);
    for (let i = 0; i < currentKey.length; i++) {
      const key = value[i];
      const checkValue = currentValue.includes((key));
      const checkKey = currentKey.includes((key));
      if (checkKey || checkValue) {
        const indexKey = currentKey.indexOf(key);
        const indexValue = currentValue.indexOf(key);
        if (indexValue !== -1) {
          currentKey.splice(indexValue, 1);
          currentValue.splice(indexValue, 1);
        }
        if (indexKey !== -1) {
          currentKey.splice(indexKey, 1);
          currentValue.splice(indexKey, 1);
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