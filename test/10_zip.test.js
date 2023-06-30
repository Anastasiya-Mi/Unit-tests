const zip = require("../src/10_zip");
describe("zip tests", () => {     
    test("check is arguments entered", () => {
        expect(zip([1, 2, 3])).toBeDefined();
    });
    test("Returns the new array of grouped elements", () => {
        expect(zip(['a', 'b'], [1, 2], [true, false])).toEqual([['a', 1, true], ['b', 2, false]]);
    });
    test("Returns the new array of grouped elements if arrays with different length", () => {
        expect(zip(['a', 'b'], [1, 2], [true, false,false])).toEqual([['a', 1, true], ['b', 2, false],[false]]);
    });
    test("Returns empty array if argument invalid", () => {
        expect(zip('users', 'user')).toEqual([]);
    });   
    test("Returns empty array if argument invalid", () => {
        expect(zip('aaaa')).toEqual([]);
    });  
    test("Returns an array if argument is single array", () => {
        expect(zip([1, 2, 3])).toEqual([[1, 2, 3]]);
    });     
});