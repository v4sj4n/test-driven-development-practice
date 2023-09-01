const capitalize = (word) => {
  return typeof word === 'string'
    ? word[0].toUpperCase() + word.slice(1)
    : 'Please enter a string'
}

module.exports = capitalize
