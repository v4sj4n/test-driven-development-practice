const analyzeArray = (arr) => {
  return arr.length === 0
    ? 'Please put some elements in the array'
    : {
        average: arr.reduce((partialSum, a) => partialSum + a, 0) / arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length,
      }
}

module.exports = analyzeArray
