function chunk(array, num) {
  let size = Math.round(num);
  if (size < 0) size = Math.abs(size);
  let chunkedArr = [];
  let index = 0;
  if (size > 0 && Array.isArray(array)) {
    while (index < array.length) {
      chunkedArr.push(array.slice(index, size + index));
      index += size;
    }
    return chunkedArr;
  }
  if (!size && Array.isArray(array)) return (chunkedArr = array);
  if (!Array.isArray(array)) {
    return [];
  }
}
module.exports = chunk;
