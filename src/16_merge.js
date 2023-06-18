function merge(object, ...other) {    
    if(!(typeof object === 'object')){
        return {};
    }
    for (const entries of other) {
        
      for (const key of Object.keys(entries)) {
        
        if (!Object.hasOwn(object, key) || typeof entries[key] !== 'object') object[key] = entries[key];
        else merge(object[key], entries[key]);
      }
    }
    return object;
  }

module.exports = merge;