import capitalize from '../code/capitalize'

test('Test string', () => {
  expect(capitalize('maghreb')).toBe('Maghreb')
})

test('Test string', () => {
  expect(capitalize('favela')).toBe('Favela')
})

test('Test string', () => {
  expect(capitalize('racecar')).toBe('Racecar')
})

test('Test string with no letters inside', () => {
  expect(capitalize('')).toBe('Please enter preferrably more than one letter')
})

test('Test string with one letter', () => {
  expect(capitalize('a')).toBe('A')
})

test('Test number', () => {
  expect(capitalize(123)).toBe('Please enter a string')
})

test('Test bool', () => {
  expect(capitalize(true)).toBe('Please enter a string')
})

test('Test no value', () => {
  expect(capitalize()).toBe('Please enter a string')
})

test('Test null', () => {
  expect(capitalize(null)).toBe('Please enter a string')
})

test('Test array', () => {
  expect(capitalize(['word'])).toBe('Please enter a string')
})

test('Test object', () => {
  expect(capitalize({ item: 'word' })).toBe('Please enter a string')
})
