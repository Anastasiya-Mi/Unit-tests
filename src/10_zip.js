const { pushPoly,filterPoly,slicePoly,forEachPoly } = require("../src/00_utils");

function zip(...array) {
  const result = [];
  let wrap = [];
  let count = 0;  
  const length = array.length;
  const checkValue = filterPoly(array,(item) => Array.isArray(item));
  if (checkValue.length !== length) {
    return [];
  }
  if (length === 1) {
    return array;
  }
 
  while (count !== length) {
    forEachPoly(checkValue,((element) => {      
      if (element[count] === undefined) {
        return;
      } else {
        pushPoly(wrap,element[count]);
        slicePoly(element,0, 1);
      }
    }));
    pushPoly(result,wrap);    
    wrap = [];
    count++;
  }
  const checkResult = filterPoly(result,(item) => item.length > 0);
  return checkResult;
}

module.exports = zip;
