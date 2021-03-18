import { Operators } from './common';
import NumberEvaluator from './NumberEvaluator';

let evaluator: NumberEvaluator;
beforeEach(() => (evaluator = new NumberEvaluator()));

describe('Numer inputs', () => {
  test('When is not a number then can evaluate mut be false', () => {
    const canEvaluate = evaluator.canEvaluate('A');
    expect(canEvaluate).toBe(false);
  });

  test('When partial and input is zero then do nothing', () => {
    const prevState = {
      total: '125',
      partial: '0',
      operation: null,
    };

    const newState = evaluator.evaluate(prevState, '0');

    expect(newState).not.toBe(prevState);
    expect(newState).toStrictEqual({ total: '0' });
  });

  test('When has a pending operation and has not a partial, then set input to partial', () => {
    const prevState = {
      total: '100',
      partial: null,
      operation: Operators.TIMES,
    };

    const newState = evaluator.evaluate(prevState, '50');

    expect(newState).not.toBe(prevState);
    expect(newState).toStrictEqual({
      total: '100',
      partial: '50',
      operation: Operators.TIMES,
    });
  });

  test('When has a partial and a pending operation, then append input to partial', () => {
    const prevState = {
      total: '20',
      partial: '10',
      operation: Operators.ADDITION,
    };

    const newState = evaluator.evaluate(prevState, '0');

    expect(newState).not.toBe(prevState);
    expect(newState).toStrictEqual({
      total: '20',
      partial: '100',
      operation: Operators.ADDITION,
    });
  });

  test('When only has a partial, then set input to partial', () => {
    const prevState = {
      total: '0',
      partial: '12',
      operation: null,
    };

    const newState = evaluator.evaluate(prevState, '20');

    expect(newState).not.toBe(prevState);
    expect(newState).toStrictEqual({
      total: '0',
      partial: '1220',
    });
  });

  test('When only has a total, then set input to partial', () => {
    const prevState = {
      total: '50',
      partial: null,
      operation: null,
    };

    const newState = evaluator.evaluate(prevState, '37');

    expect(newState).not.toBe(prevState);
    expect(newState).toStrictEqual({
      total: '50',
      partial: '37',
    });
  });
});
