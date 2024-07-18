const removeFromArray = require('./removeFromArray');

test('Remove number from array', () => {
  expect(removeFromArray([2, 43, 543, 45, 5, 564], 5)).toEqual(
    [2, 43, 543, 45, 564]
  )
})