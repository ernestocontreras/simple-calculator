import { Functions, Operators } from './common';
import FunctionEvaluator from './FunctionEvaluator';

let evaluator: FunctionEvaluator;
beforeEach(() => (evaluator = new FunctionEvaluator()));

describe('Can evaluate', () => {
  test('When is a non valid function', () => {
    const canEvaluate = evaluator.canEvaluate('+');
    expect(canEvaluate).toBe(false);
  });
});

describe('AC function', () => {
  test('When has a total and a partial value', () => {
    const prevState = {
      total: '123',
      partial: '321',
      operation: null,
    };

    const newState = evaluator.evaluate(prevState, Functions.AC);

    expect(newState).not.toBe(prevState);
    expect(newState).toStrictEqual({ total: '0' });
  });
});

describe('Negate function', () => {
  test('When only has total value', () => {
    const prevState = {
      total: '789',
      partial: null,
      operation: null,
    };

    const newState = evaluator.evaluate(prevState, Functions.NEGATE);
    expect(newState).not.toBe(prevState);
    expect(newState).toStrictEqual({ total: '-789' });
  });

  test('When has a total and a partial value', () => {
    const prevState = {
      total: '456',
      partial: '2021',
      operation: null,
    };

    const newState = evaluator.evaluate(prevState, Functions.NEGATE);
    expect(newState).not.toBe(prevState);
    expect(newState).toStrictEqual({ partial: '-2021' });
  });
});

describe('Percent function', () => {
  test('When only has a partial value', () => {
    const prevState = {
      total: '0',
      partial: '87',
      operation: null,
    };

    const newState = evaluator.evaluate(prevState, Functions.PERCENT);
    expect(newState).not.toBe(prevState);
    expect(newState).toStrictEqual({ partial: '0.87' });
  });

  test('When has a partial value and a pending operation', () => {
    const prevState = {
      total: '280',
      partial: '4',
      operation: Operators.DIVISION,
    };

    const newState = evaluator.evaluate(prevState, Functions.PERCENT);
    expect(newState).not.toBe(prevState);
    expect(newState).toStrictEqual({ total: '0.7' });
  });
});

describe('Equals function', () => {
  test('When only has a partial value', () => {
    const prevState = {
      total: '0',
      partial: '123.456',
      operation: null,
    };

    const newState = evaluator.evaluate(prevState, Functions.EQUALS);
    expect(newState).not.toBe(prevState);
    expect(newState).toStrictEqual({ total: '123.456' });
  });

  test('When has a partial value and a pending operation', () => {
    const prevState = {
      total: '123',
      partial: '200',
      operation: Operators.SUBSTRACTION,
    };

    const newState = evaluator.evaluate(prevState, Functions.EQUALS);
    expect(newState).not.toBe(prevState);
    expect(newState).toStrictEqual({ total: '-77' });
  });
});
