const find = require("../src/07_find");
describe("find tests", () => {
    const users = [
        { 'user': 'barney', 'age': 36, 'active': true },
        { 'user': 'fred', 'age': 40, 'active': false },
        { 'user': 'pebbles', 'age': 1, 'active': true }
    ];
    test("check is arguments entered", () => {
        expect(find(users, "1")).toBeDefined();
    });
    test("Returns the slice of array if predicate is function", () => {
        expect(
            find(users, function (o) {
                return o.active;
            })
        ).toEqual({ 'user': 'barney', 'age': 36, 'active': true });
    });
    test("Returns the slice of array if predicate is object", () => {
        expect(find(users, { 'age': 1, 'active': true })).toEqual([
            { 'user': 'pebbles', 'age': 1, 'active': true }
        ]);
    });
    test("Returns the slice of array if predicate is an array", () => {
        expect(find(users, ["active", false])).toEqual([
            { 'user': 'fred', 'age': 40, 'active': false }
        ]);
    });
    test("Returns an empty array if predicate is undefined", () => {
        expect(find(users)).toEqual([]);
    });
    test("Returns the slice of array if predicate is string", () => {
        expect(find(users, "active")).toEqual(
            { 'user': 'barney', 'age': 36, 'active': true }

        );
    });
    test("Returns an empty array if argument is not an array ", () => {
        expect(find("users")).toEqual([]);
    });
});
