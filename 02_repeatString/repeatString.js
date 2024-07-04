const repeatString = (string, num) => {
  let repeatS = [];
  for (let i=0; i < num; i++) {
    repeatS.push(string);
  }

  return repeatS.join('');
};

module.exports = repeatString;
