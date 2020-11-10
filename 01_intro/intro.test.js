const { sum, nativeNull } = require("./intro");

describe('Sum function', () => {
    test('Sum should return sum of 2 values', () => {
        expect(sum(5, 1)).toBe(6)
    });

    test('Sum should return value correctly comparing to other', () => {
        expect(sum(2, 3)).toBeGreaterThan(4);
        expect(sum(3, 3)).toBeGreaterThanOrEqual(5);
        expect(sum(2, 3)).toBeLessThan(6)
    });

    test('Sum should sum 2 float values correctly', () => {
        expect(sum(0.1, 0.2)).toBeCloseTo(0.3)
    });
});

describe('Native null function', () => {
    test('Native null should return native value null', () => {
        expect(nativeNull()).toBe(null);
        expect(nativeNull()).toBeNull();
        expect(nativeNull()).toBeFalsy(); //undefined, null, 0, ''
        expect(nativeNull()).toBeDefined();
        expect(nativeNull()).not.toBeTruthy();
    })
});

