const removeFromArray = (array, number) => {
  let editedArr = [];

  for (let i=0; i<array.length; i++) {
    if(array[i] !== number) {
      editedArr.push(array[i])
    }
  }

  return editedArr;
};

module.exports = removeFromArray;
