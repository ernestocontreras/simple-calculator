import { operate } from './common';

describe('operate', () => {
  test('division between two values', () => {
    expect(operate('10', '÷', '2')).toBe('5');
  });

  test('multiplication of two values', () => {
    expect(operate('12', '×', '22')).toBe('264');
  });

  test('subtraction between two values', () => {
    expect(operate('15.035', '−', '0.035')).toBe('15');
  });

  test('sum of two values', () => {
    expect(operate('-7', '+', '14')).toBe('7');
  });

  test('throw error if the operation is not defined', () => {
    expect(() => operate('2', '^', '3'))
      .toThrowError(new Error(`Arithmetic operation is not supported ^`));
  });
});
