import calculator from '../code/calculator'

test('Adding', () => {
  expect(calculator.add(2, 3)).toBe(5)
})
test('Subtracting', () => {
  expect(calculator.subtract(8, 3)).toBe(5)
})
test('Dividing', () => {
  expect(calculator.divide(15, 3)).toBe(5)
})
test('Multiplying', () => {
  expect(calculator.multiply(1.6666666666666667, 3)).toBe(5)
})

test('No value', () => {
  expect(calculator.multiply()).toBe(NaN)
})
test('Multiplying', () => {
  expect(calculator.multiply('a', 'b')).toBe(NaN)
})
