function includes(collection, value,fromIndex){
    if(!fromIndex)
    fromIndex = 0;
    if(!collection || value === undefined){        
        return false;
    }
    const typeOfCollection = typeof collection;
    switch(typeOfCollection){
    case ('object'):
    if(Array.isArray(collection)){      
    return collection.includes(value,fromIndex);
    } else{
        const keys = Object.keys(collection);
        const values = Object.values(collection);
        if(keys.includes(value,fromIndex) || values.includes(value,fromIndex)){
            return true;
        } 
    }
    return false;
    case ('string'):
    return collection.includes(value,fromIndex);
}
}

module.exports = includes;