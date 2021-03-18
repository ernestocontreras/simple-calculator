import DotEvaluator from './DotEvaluator';

let evaluator: DotEvaluator;
beforeEach(() => (evaluator = new DotEvaluator()));

describe('Dot evaluator', () => {
  test('When is a non valid dot, then cannot evaluate', () => {
    const canEvaluate = evaluator.canEvaluate('+');
    expect(canEvaluate).toBe(false);
  });

  test('When has a partial with a dot, then do nothing', () => {
    const prevState = {
      total: '0',
      partial: '10.2',
      operation: null,
    };

    const newState = evaluator.evaluate(prevState, '.');
    expect(newState).toStrictEqual(prevState);
  });

  test('When has a partial without a dot, then append it to partial', () => {
    const prevState = {
      total: '0',
      partial: '10',
      operation: null,
    };

    const newState = evaluator.evaluate(prevState, '.');
    expect(newState).toStrictEqual({
      total: '0',
      partial: '10.',
      operation: null,
    });
  });

  test('When has not a partial, then start one with 0.', () => {
    const prevState = {
      total: '0',
      partial: null,
      operation: null,
    };

    const newState = evaluator.evaluate(prevState, '.');
    expect(newState).toStrictEqual({
      partial: '0.',
    });
  });
});
