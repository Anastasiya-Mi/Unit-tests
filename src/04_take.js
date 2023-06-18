function take(array, countOfItems) {
  const start = 0;
  if (!(typeof countOfItems === "number") && Array.isArray(array)) {
    return array.slice(start, start + 1);
  }
  if (!Array.isArray(array)) {
    return [];
  }
  return array.slice(start, countOfItems);
}

module.exports = take;
