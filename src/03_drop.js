function drop(array, countOfItems) {
  const end = array.length;
  if (!(typeof countOfItems === "number") && Array.isArray(array)) {
    const start = 1;
    return array.slice(start, end);
  }
  if (!Array.isArray(array)) {
    return [];
  }
  return array.slice(countOfItems, end);
}

module.exports = drop;
