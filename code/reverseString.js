const reverseString = (word) => {
  return typeof word !== 'string'
    ? 'Please enter a string'
    : word.length === 0
    ? 'Please enter preferrably more than one letter'
    : word.length === 1
    ? word
    : reverseString(word.slice(1)) + word[0]
}

module.exports = reverseString
