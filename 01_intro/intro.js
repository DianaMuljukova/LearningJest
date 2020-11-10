function expect(value) {
    return {
        toBe: exp => {
            if (value === exp) console.log('Success');
            else console.log(`Value is ${value}, but expectation is ${exp}`)
        }
    }
}

const sum = (a, b) => a + b;

const nativeNull = () => null;

module.exports = {sum, nativeNull};

//expect(sum(100, 500)).toBe(6000);