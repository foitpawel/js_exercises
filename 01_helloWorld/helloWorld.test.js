const helloWorld = require('./helloWorld');

test('says "Hello, World!"', function() {
  expect(helloWorld()).toEqual('Hello, World!');
});