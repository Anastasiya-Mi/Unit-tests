function compact(array) {
  if (Array.isArray(array)) return array.filter((element) => !!element);
  else return [];
}
module.exports = compact;
