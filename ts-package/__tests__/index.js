import * as ts from '../index';

describe("ts", function() {
    it("J", function() {
        expect(ts.J).toEqual({a: {b: {c: {d: 123}}}});
    });
});
