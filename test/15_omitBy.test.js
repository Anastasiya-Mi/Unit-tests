const omitBy = require("../src/15_omitBy");

describe("omitBy tests", () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };
    function isNumber(v) {
        if (!(typeof v === 'number')) {
            return true;
        }
    }
    test("check is arguments entered", () => {
        expect(omitBy(object, isNumber)).toBeDefined();
    });
    test("Returns the new object if argument is valid", () => {
        expect(omitBy(object, isNumber)).toEqual({'b': '2'});
    });  
    
    test("Returns empty object if argument invalid", () => {
        expect(omitBy('users', 'user')).toEqual({});
    });
    test("Returns empty object if argument invalid", () => {
        expect(omitBy(object, 1)).toEqual({});
    });
    test("Returns empty object if argument invalid", () => {
        expect(omitBy()).toEqual({});
    });
});