const toPairs = require("../src/14_toPairs");
describe("toPairs tests", () => {
    const object = { 'a': 1, 'b': '2', 'c': 3, 'x': 4 };
    test("check is arguments entered", () => {
        expect(toPairs({ 'a': 1, 'b': '2', 'c': 3 })).toBeDefined();
    });
    test("Returns the key-value pairs", () => {
        expect(toPairs(object)).toEqual([["a", 1], ["b", "2"], ["c", 3], ["x", 4]]);
    });   
    test("Returns empty object if argument is not invalid", () => {
        expect(toPairs('users')).toEqual({});
    });  
    test("Returns empty object if argument is not invalid", () => {
        expect(toPairs()).toEqual({});
    });
});