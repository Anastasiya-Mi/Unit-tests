const pick = require("../src/11_pick");
describe("pick tests", () => {     
    const object = { 'a': 1, 'b': '2', 'c': 3 };
    test("check is arguments entered", () => {
        expect(pick({ 'a': 1, 'b': '2', 'c': 3 },'2')).toBeDefined();
    });
    test("Returns the new object if second argument is array", () => {
        expect(pick(object, ['a', 'c'])).toEqual({ 'a': 1, 'c': 3 });
    });
    test("Returns the new object if second argument is string", () => {
        expect(pick(object, 'a')).toEqual({ 'a': 1});
    });
    test("Returns empty object if argument is not invalid", () => {
        expect(pick('users', 'user')).toEqual({});
    });
    test("Returns empty object if argument is not invalid", () => {
        expect(pick()).toEqual({});
    });
       
});