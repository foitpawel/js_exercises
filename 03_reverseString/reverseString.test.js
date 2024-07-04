const reverseString = require('./reverseString');

test('Reverse word "Pawel"', () => {
  expect(reverseString('Pawel')).toEqual('lewaP');
});

test('Reverse word "Kamil Ślimak"', () => {
  expect(reverseString('Kamil Ślimak')).toEqual('kamilŚ limaK');
});
