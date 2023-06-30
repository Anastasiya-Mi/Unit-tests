function pushPoly(array, item) {
  array[array.length] = item;
}

function slicePoly(array, start, end) {
  let result = [];
  let count = 0;
  const length = array.length;
  end = end > length ? length : end;
  end = end === undefined || end === null ? length : end;
  start = start < 0 && start >= -length ? length + start : start;
  start = start < -length ? array : start;
  for (let i = start; i < end; i++) {
    result[count] = array[i];
    count++;
  }
  return result;
}

function filterPoly(array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      result[result.length] = array[i];
    }
  }
  return result;
}

function forEachPoly(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}
function includesPoly(array, value, fromIndex = 0) {
  for (let i = fromIndex; i < array.length; i++) {
    if (array[i] === value) return true;
  }
  return false;
}
function mapPoly(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    let item = callback(array[i], i, array);
    result[result.length] = item;
  }
  return result;
};

function indexOfPoly(array, searchElement, fromIndex) {
  fromIndex = fromIndex >= 0 ? fromIndex : 0;
  for (let i = fromIndex; i < array.length; i++) {
    if (array[i] === searchElement) return i;
  }
  return -1;
};
function splicePoly(array, start, deleteCount, ...items) {
  const result = [];
  const length = array.length;
  start = start >= 0 ? start : Math.max(length + start, 0);
  deleteCount = Math.min(Math.max(deleteCount, 0), length - start);

  for (let i = start; i < length - deleteCount; i++) {
    array[i] = array[i + deleteCount];
  }
  for (let i = 0; i < deleteCount; i++) {
    result[i] = array[start + i];
  }
  for (let i = length - deleteCount; i < length - deleteCount + items.length; i++) {
    array[i] = items[i - length + deleteCount];
  }
  array.length = length - deleteCount + items.length;
  return result;
};

module.exports = { pushPoly, slicePoly, filterPoly, forEachPoly, includesPoly, mapPoly,splicePoly,indexOfPoly };
