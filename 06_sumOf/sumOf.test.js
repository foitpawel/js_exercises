const sumOf = require('./sumOf');

test('sum numbers out of given arr [1,2,3]', () => {
  expect(sumOf([1,2,3])).toEqual(6)
});

test('sum numbers out of given arr []', () => {
  expect(sumOf([])).toEqual(0)
});

test('sum numbers out of given arr [elom, elo]', () => {
  expect(sumOf(['elom', 'elo'])).toEqual('0elomelo')
});
