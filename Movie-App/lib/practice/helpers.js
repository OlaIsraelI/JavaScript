

const addupNums = (arrNums) => {
  return arrNums.reduce((sum, num) => sum + num, 0); 
}


const findLastElement = (arrayNumbers) => {
  return arrayNumbers[arrayNumbers.length - 1];
}


module.exports = {addupNums, findLastElement};
// module.exports = findLastElement;