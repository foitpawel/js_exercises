const repeatString = require('./repeatString');

test('says "helohelohelo"', () => {
  expect(repeatString('helo', 3)).toEqual('helohelohelo');
});

test('says "aaaaa"', () => {
  expect(repeatString('a', 5)).toEqual('aaaaa');
});

test('says "alan ma kota"', () => {
  expect(repeatString('alan ma kota', 1)).toEqual('alan ma kota');
});

test('says "010010"', () => {
  expect(repeatString('010', 2))
  .toEqual('010010');
});
