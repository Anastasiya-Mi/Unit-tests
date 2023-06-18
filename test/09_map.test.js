const map = require("../src/09_map");
describe("map tests", () => {   
    const users = [
        { 'user': 'barney' },
        { 'user': 'fred' }
      ];
      function square(n) {
        return n * n;
      }
    test("check is arguments entered", () => {
        expect(map([1, 2, 3], 1)).toBeDefined();
    });
    test("Returns the new mapped array according function if first argument is array", () => {
        expect(map([4, 8], square)).toEqual([16, 64]);
    });
    test("Returns the new mapped array according function if first argument is object", () => {
        expect(map({ 'a': 4, 'b': 8 }, square)).toEqual([16, 64]);
    });
    test("Returns the new mapped array if first argument is object and second is string", () => {
        expect(map(users, 'user')).toEqual(['barney', 'fred']);
    });   
    test("RReturns empty array if argument is not invalid", () => {
        expect(map([1, 2, 3])).toEqual([]);
    });
    test("Returns empty array if argument is not invalid", () => {
        expect(map(1)).toEqual([]);
    });    
});