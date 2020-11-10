const {map} = require("./mock");

describe('Map function', () => {
   let array = [];
   let fn;

   beforeEach(() => {
       array = [1, 2, 3, 5];
       fn = jest.fn(x => x ** 2);
   });

   test('should call callback', () => {
       map(array, fn);
       expect(fn).toBeCalled();
       expect(fn).toBeCalledTimes(4);
   });
   test('should call callback 4  times', () => {
       map(array, fn);
       expect(fn).toBeCalledTimes(4);
       expect(fn.mock.calls.length).toBe(4)
   });
   test('should pow 2 each elements', () => {
       expect(map(array, fn)).toEqual([1, 4, 9, 25]);
       expect(fn.mock.results[0].value).toBe(1);
       expect(fn.mock.results[1].value).toBe(4);
       expect(fn.mock.results[2].value).toBe(9);
       expect(fn.mock.results[3].value).toBe(25);
   });
});