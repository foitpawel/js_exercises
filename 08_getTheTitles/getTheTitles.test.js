const getTheTitles = require('./getTheTitle');

test('Get titles from an array', () =>
  expect(getTheTitles(
      [
        {
          title: 'Book',
          author: 'Name'
        },
        {
          title: 'Book2',
          author: 'Name2'
        }
      ]
    )
  ).toEqual(['Book', 'Book2'])
);
