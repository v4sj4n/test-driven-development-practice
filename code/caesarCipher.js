const caesarCipher = (phrase, shift) => {
  if (shift === 0) {
    return phrase
  }
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const phraseArr = phrase.split('')
  const finalArr = []
  phraseArr.forEach((letter) => {
    const el = letter.toLowerCase()
    let index
    if (alphabet.indexOf(el) === -1) {
      finalArr.push(el)
    } else if (shift > 0) {
      index =
        alphabet.indexOf(el) + shift <= alphabet.length - 1
          ? alphabet.indexOf(el) + shift
          : alphabet.indexOf(el) + shift - alphabet.length
      finalArr.push(alphabet[index])
    } else if (shift < 0) {
      index =
        alphabet.indexOf(el) + shift >= 0
          ? alphabet.indexOf(el) + shift
          : alphabet.length + (alphabet.indexOf(el) + shift)
      finalArr.push(alphabet[index])
    }
  })
  return finalArr.join('')
}

module.exports = caesarCipher
