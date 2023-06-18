const pickBy = require("../src/13_pickBy");

describe("pickBy tests", () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };
    function isNumber(v) {
        if (typeof v === 'number') {
            return true;
        }
    }
    test("check is arguments entered", () => {
        expect(pickBy(object, isNumber)).toBeDefined();
    });
    test("Returns the new object if argument is valid", () => {
        expect(pickBy(object, isNumber)).toEqual({ 'a': 1, 'c': 3 });
    });  
    
    test("Returns empty object if argument is not invalid", () => {
        expect(pickBy('users', 'user')).toEqual({});
    });
    test("Returns empty object if argument is not invalid", () => {
        expect(pickBy(object, 1)).toEqual({});
    });
});