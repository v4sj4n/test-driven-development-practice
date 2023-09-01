const capitalize = (word) => {
  return typeof word !== 'string'
    ? 'Please enter a string'
    : word.length > 0
    ? word[0].toUpperCase() + word.slice(1)
    : 'Please enter preferrably more than one letter'
}

module.exports = capitalize
