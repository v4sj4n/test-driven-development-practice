import caesarCipher from '../code/caesarCipher'

test('1st test', () => {
  expect(caesarCipher('zzz', 3)).toBe('ccc'),
    expect(caesarCipher('abc', 3)).toBe('def'),
    expect(caesarCipher('def', -3)).toBe('abc')
})

test('2nd test', () => {
  expect(caesarCipher('My name is Vasjan!', 4)).toBe('qc reqi mw zewner!'),
    expect(caesarCipher('What is your name?', 22)).toBe('sdwp eo ukqn jwia?'),
    expect(caesarCipher('My name is Ina.', 26)).toBe('my name is ina.')
})
