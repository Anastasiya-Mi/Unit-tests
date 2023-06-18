const omit = require("../src/12_omit");
describe("omit tests", () => {
    const object = { 'a': 1, 'b': '2', 'c': 3, 'x': 4 };
    test("check is arguments entered", () => {
        expect(omit({ 'a': 1, 'b': '2', 'c': 3 }, '2')).toBeDefined();
    });
    test("Returns the new object if second argument is array", () => {
        expect(omit(object, ['a', 'c'])).toEqual({ 'b': '2', 'x': 4 });
    });
    test("Returns the new object if second argument is string", () => {
        expect(omit(object, 'a')).toEqual({ 'b': '2', 'c': 3, 'x': 4 });
    });
    test("Returns the new object if second argument is string", () => {
        expect(omit(object, 'xxx')).toEqual({ 'a': 1, 'b': '2', 'c': 3, 'x': 4 });
    });
    test("Returns empty object if argument is not invalid", () => {
        expect(omit('users', 'user')).toEqual({});
    });
    test("Returns empty object if argument is not invalid", () => {
        expect(omit(object, 1)).toEqual({});
    });
});