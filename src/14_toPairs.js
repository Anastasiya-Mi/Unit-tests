function toPairs(object) {
    if (Array.isArray(object) || typeof object !== "object") {
      return {};
    }
   const result = Object.entries(object)
    return result;
  }

      module.exports = toPairs;
   
 