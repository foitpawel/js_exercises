const fibonacci = require('./fibonacci');

test('Make fibonacci of number 6', () => {
  expect(fibonacci(6)).toEqual(8)
});

test('Make fibonacci of number 1', () => {
  expect(fibonacci(1)).toEqual(1)
});

