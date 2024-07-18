const sumOf = (array) => {
  const sum = Array.isArray(array) ? array.reduce((acc, cur) => acc + cur, 0) : 'wrong type';

  return sum;
};

module.exports = sumOf;
