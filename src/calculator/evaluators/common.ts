export const Operators = {
  DIVISION: '÷',
  TIMES: '×',
  SUBSTRACTION: '−',
  ADDITION: '+',
};

export const Functions = {
  AC: 'AC',
  NEGATE: '+/-',
  PERCENT: '%',
  EQUALS: '=',
};

/**
 * @returns The result of execute the given operation with x and y.
 */
export function operate(x: string, operation: string, y: string): string {
  switch (operation) {
    case Operators.DIVISION:
      return (parseFloat(x) / parseFloat(y)).toString();
    case Operators.TIMES:
      return (parseFloat(x) * parseFloat(y)).toString();
    case Operators.SUBSTRACTION:
      return (parseFloat(x) - parseFloat(y)).toString();
    case Operators.ADDITION:
      return (parseFloat(x) + parseFloat(y)).toString();
  }

  throw new Error(`Arithmetic operation is not supported ${operation}`);
}
