const includes = require("../src/08_includes");
describe("includes tests", () => {    
    test("check is arguments entered", () => {
        expect(includes([1, 2, 3], 1)).toBeDefined();
    });
    test("Returns true if value is found", () => {
        expect(includes([1, 2, 3], 1)).toEqual(true);
    });
    test("Returns false if value not found", () => {
        expect(includes([1, 2, 3], 7)).toEqual(false);
    });
    test("Returns false if value not found", () => {
        expect(includes([1, 2, 3], 1, 2)).toEqual(false);
    });
    test("Returns true if value is found", () => {
        expect(includes({ 'a': 1, 'b': 2 }, 1)).toEqual(true);
    });
    test("Returns true if value is found", () => {
        expect(includes({ 'a': 1, 'b': 2 }, 'a')).toEqual(true);
    });
    test("Returns false array if argument invalid", () => {
        expect(includes([1, 2, 3])).toEqual(false);
    });
    test("Returns false array if argument invalid", () => {
        expect(includes(1)).toEqual(false);
    });
    
    test("Returns true if value is zero", () => {
        expect(includes([0,1,2],0)).toEqual(true);
    });   
    test("Returns false array if argument  invalid", () => {
        expect(includes()).toEqual(false);
    });
});
