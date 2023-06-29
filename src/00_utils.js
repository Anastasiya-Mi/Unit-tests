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

function checkValue(value){
  if(value) return true;
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

function forEachPoly(array,callback){
  for (let i = 0; i < array.length; i++) {
     callback(array[i], i, array);
  }   
}
function includesPoly(array,value,fromIndex=0){
  for (let i = fromIndex; i < array.length; i++) {
     if(array[i] === value) return true;
  }   
  return false;
}

module.exports = { pushPoly, slicePoly, filterPoly,checkValue,forEachPoly,includesPoly };
