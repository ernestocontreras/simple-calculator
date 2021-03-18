import ComposedEvaluator from './ComposedEvaluator';

let evaluator: ComposedEvaluator;
beforeEach(() => (evaluator = new ComposedEvaluator()));

describe('Composed evaluation', () => {
  test('When is a non supported input', () => {
    const result = evaluator.evaluate(',');
    expect(result).toBe('0');
  });

  test('When is a supported input', () => {
    const results = [
      evaluator.evaluate('5'),
      evaluator.evaluate('+'),
      evaluator.evaluate('5'),
      evaluator.evaluate('=')
    ];

    expect(results).toStrictEqual(['5', '5', '5', '10']);
  });
});
