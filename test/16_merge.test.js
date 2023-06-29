const merge = require("../src/16_merge");

describe("merge tests", () => {
    const object = {'a': [{ 'b': 2 }, { 'd': 4 }]};
    const other = {'a': [{ 'c': 3 }, { 'e': 5 }]};
    test("check is arguments entered", () => {
        expect(merge(object, other)).toBeDefined();
    });
    test("Returns object if argument is valid", () => {
      expect(merge(object, other)).toEqual({"a": [{"b": 2, "c": 3}, {"d": 4, "e": 5}]});
    });    
    test("Returns empty object if first argument invalid", () => {
        expect(merge('users', 'user')).toEqual({});
    });    
    test("Returns empty object if first argument invalid", () => {
        expect(merge()).toEqual({});
    }); 
});
