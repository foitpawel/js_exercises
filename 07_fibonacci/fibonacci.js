const fibonacci = num => {
  let sum;
  let arr = [];
  for (let i = 0; i < num; i++) {
    sum = (i === 0) ? 1 : (i === 1) ? 1 : (arr[i-1] + arr[i-2]);
    arr.push(sum);
  }
  return sum
}

module.exports = fibonacci;