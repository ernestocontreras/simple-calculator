export default class NumberEvaluator implements CalculatorInputEvaluator {

  canEvaluate(input: string): boolean {
    return /^[0-9]+$/.test(input);
  }

  evaluate(state: CalculatorState, input: string): CalculatorState {
    if (input === '0' && state.partial === '0') {
      return { total: '0' };
    }

    if (state.operation) {
      if (state.partial) {
        return {
          partial: state.partial + input,
          total: state.total,
          operation: state.operation,
        };
      }

      return { partial: input, total: state.total, operation: state.operation };
    }

    if (state.partial) {
      const partial = state.partial === '0' ? input : state.partial + input;
      return { partial, total: state.total };
    }

    return { partial: input, total: state.total };
  }
}
