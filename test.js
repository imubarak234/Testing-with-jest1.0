const {stringLength, reverseString, calculator, capitalize} = require('./task.js');

it('works', () => {
  expect(stringLength('hi there')).toBe(8);
});

it('Range', () => {
  expect(() => stringLength('')).toThrow(Error);
})

it('Works right', () => {
  expect(reverseString('strr')).toBe('rrts');
})

calc = new calculator();

describe('adding function', () => {
  test('adding should work', () => {
    expect(calc.add(6,5)).toBe(11);
  })
  test('adding should work', () => {
    expect(calc.add(4,2)).not.toBe(9);
  })
  test('adding should work', () => {
    expect(calc.add(4,9)).toBe(13);
  })
  test('adding should work', () => {
    expect(calc.add(-4,5)).toBe(1);
  })
})

describe('Substract Function', () => {
  test('simply take away', () => {
    expect(calc.substract(9,78)).toBe(-69);
  })
  test('simply take away', () => {
    expect(calc.substract(9,5)).not.toBe(-69);
  })
  test('simply take away', () => {
    expect(calc.substract(9,7)).toBe(2);
  })
  test('simply take away', () => {
    expect(calc.substract(79,78)).toBe(1);
  })
})

describe('Divide Funtion', () => {
  test('Just checking', () => {
    expect(calc.divide(9,3)).toBe(3);
  })
  test('Just checking', () => {
    expect(calc.divide(15,3)).not.toBe(3);
  })
  test('Just checking', () => {
    expect(calc.divide(-25,5)).toBe(-5);
  })
  test('Just checking', () => {
    expect(calc.divide(9,2)).toBe(4.5);
  })
})

describe('Multiplication Function Test', () => {
  test('Multiplactions all round', () => {
    expect(calc.multiply(9,3)).toBe(27);
  })
  test('Multiplactions all round', () => {
    expect(calc.multiply(5,3)).toBe(15);
  })
  test('Multiplactions all round', () => {
    expect(calc.multiply(-7,-3)).toBe(21);
  })
  test('Multiplactions all round', () => {
    expect(calc.multiply(9,-3)).toBe(-27);
  })
})

it('Capitalizer is working', () => {
  expect(capitalize('lookings')).toBe('Lookings');
})
