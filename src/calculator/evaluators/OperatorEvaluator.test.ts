import { Operators } from './common';
import OperatorEvaluator from './OperatorEvaluator';

let evaluator: OperatorEvaluator;
beforeEach(() => (evaluator = new OperatorEvaluator()));

describe('Operators', () => {
  test('When is a non valid operator, then cannot evaluate', () => {
    const canEvaluate = evaluator.canEvaluate('%');
    expect(canEvaluate).toBe(false);
  });

  test('When has a partial value and a pending operation', () => {
    const prevState = {
      total: '10',
      partial: '20',
      operation: Operators.TIMES,
    };

    const newState = evaluator.evaluate(prevState, Operators.ADDITION);

    expect(newState).not.toBe(prevState);
    expect(newState).toStrictEqual({
      total: '200',
      operation: Operators.ADDITION,
    });
  });

  test('When has not pending operation', () => {
    const prevState = {
      total: '0',
      partial: '10',
      operation: null,
    };

    const newState = evaluator.evaluate(prevState, Operators.ADDITION);

    expect(newState).not.toBe(prevState);
    expect(newState).toStrictEqual({
      total: '10',
      operation: Operators.ADDITION,
    });
  });
});
