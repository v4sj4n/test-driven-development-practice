import analyzeArray from '../code/analyzeArray'

test('Testing a 6 element array', () => {
  expect(analyzeArray([1, 2, 3, 4, 5, 6])).toEqual({
    average: 3.5,
    length: 6,
    max: 6,
    min: 1,
  })
})

test('Testing a 1 element array', () => {
  expect(analyzeArray([4])).toEqual({
    average: 4,
    length: 1,
    max: 4,
    min: 4,
  })
})

test('Testing an array with no elements', () => {
  expect(analyzeArray([])).toBe('Please put some elements in the array')
})
