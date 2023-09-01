import reverseString from '../code/reverseString'

test('Test string', () => {
  expect(reverseString('maghreb')).toBe('berhgam')
})
test('Test string', () => {
  expect(reverseString('favela')).toBe('alevaf')
})

test('Test string', () => {
  expect(reverseString('racecar')).toBe('racecar')
})

test('Test string with no letters inside', () => {
  expect(reverseString('')).toBe(
    'Please enter preferrably more than one letter'
  )
})

test('Test string with one letter', () => {
  expect(reverseString('a')).toBe('a')
})

test('Test number', () => {
  expect(reverseString(123)).toBe('Please enter a string')
})

test('Test bool', () => {
  expect(reverseString(true)).toBe('Please enter a string')
})

test('Test no value', () => {
  expect(reverseString()).toBe('Please enter a string')
})

test('Test null', () => {
  expect(reverseString(null)).toBe('Please enter a string')
})

test('Test array', () => {
  expect(reverseString(['word'])).toBe('Please enter a string')
})

test('Test object', () => {
  expect(reverseString({ item: 'word' })).toBe('Please enter a string')
})
