const reverseString = (string) => {
  const char = string.split('');
  let reverse = [];
  for(let i=0; i < string.length; i++) {
    reverse.push(char[string.length - i - 1]);
  }

  return(reverse.join(''));
}

module.exports = reverseString;
