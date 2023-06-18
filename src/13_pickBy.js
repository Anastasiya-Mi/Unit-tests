function pickBy(obj, predicate) {
    const newObj = {}
    if (typeof obj === 'object' && !Array.isArray(obj) && typeof predicate === 'function') {
        for (let key in obj) {
            const value = obj[key];
            const result = predicate(value);
            if (result) {
                newObj[key] = value;
            }
        }
        return newObj;
    }
    return {};
}

module.exports = pickBy;