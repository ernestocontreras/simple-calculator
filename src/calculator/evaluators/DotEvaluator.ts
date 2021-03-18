export default class DotEvaluator implements CalculatorInputEvaluator {
  canEvaluate(input: string): boolean {
    return '.' === input;
  }

  evaluate(state: CalculatorState, input: string): CalculatorState {
    if (state.partial) {
      if (state.partial.includes('.')) {
        return state;
      }

      return {
        partial: state.partial + '.',
        total: state.total,
        operation: state.operation
      };
    }

    return { partial: '0.' };
  }
}
