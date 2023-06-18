function zip(...array) {
  const length = array.length;
  const checkValue = array.filter((item) => Array.isArray(item));
  if (checkValue.length !== length) {
    return [];
  }
  if (length === 1) {
    return array;
  }
  const result = [];
  let wrap = [];
  let count = 0;  
  while (count !== length) {
    checkValue.forEach((element) => {      
      if (element[count] === undefined) {
        return;
      } else {
        wrap.push(element[count]);
        element.slice(0, 1);
      }
    });

    result.push(wrap);
    wrap = [];
    count++;
  }
  const checkResult = result.filter((item) => item.length > 0);
  return checkResult;
}

module.exports = zip;
