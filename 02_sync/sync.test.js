const Lodash = require("./sync");
let _ = new Lodash();

describe('Lodash: compact', () => {

    let array = [];

    beforeEach(() => {
        array = [false, 24, 0, '', true, null, 'hello'];
    });

    afterAll(() => {
        _ = new Lodash();
    });

    test('should be defined', () => {
        expect(_.compact).toBeDefined();
        expect(_.compact).not.toBeUndefined();
    });
    test('should remove falsy values from array', () => {
        const result = [24, true,'hello'];
        expect(_.compact(array)).toEqual(result)
    });
    test('should not contain falsy values', () => {
        expect(_.compact(array)).not.toContain(false);
        expect(_.compact(array)).not.toContain(0);
        expect(_.compact(array)).not.toContain(null);
    })
});

describe('Lodash group by', () => {
    test('shold be difined', () => {
        expect(_.groupBy).toBeDefined()
    });
    test('should group by items by length', () => {
        const array = ['one', 'two', 'three'];
        const result = {
            5: ['three'],
            3: ['one', 'two']
        };
        expect(_.groupBy(array, 'length')).toEqual(result)
    });
    test('should NOT return array', () => {
        expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array)
    })
});