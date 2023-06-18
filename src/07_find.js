function find(array, predicate) {    
    let result;
    const newArray = [];
    if (!Array.isArray(array) || !predicate) {
        return newArray;
    }
    const typeOfPredicate = typeof predicate;
    if (Array.isArray(predicate)) {
        const value = predicate[0];
        array.forEach((element) => {
            if (!element[value]) {
                newArray.push(element);
            }
        });
        return newArray;
    }
    switch (typeOfPredicate) {
        case "object":
            const value = Object.values(predicate);
            const key = Object.keys(predicate);
            array.forEach((element) => {
                for (let i = 0; i < value.length; i++) {
                    const keyElements = key[i];
                    if (element[keyElements] === value[i]) {
                        newArray.push(element);
                    }
                    element = 0;
             }
            });
            return newArray;
        case "function":
            array.forEach((element) => {
                const result = predicate(element);
                if (result) {
                    newArray.push(element);
                }
            });
            result = newArray[0];
            return result;
        case "string":            
            array.forEach((element) => {
                if (element.hasOwnProperty(predicate)){
                    newArray.push(element);                                                       
                } 
                result = newArray[0]  
                if (!element.hasOwnProperty(predicate)){
                    result = newArray;
                }                                 
            });
            return result;
            default: return newArray;
    }
}

  module.exports = find;
