import { operate, Operators } from './common';

export default class OperatorEvaluator implements CalculatorInputEvaluator {
  canEvaluate(input: string): boolean {
    return Object.values(Operators).some((value) => value === input);
  }

  evaluate(state: CalculatorState, input: string): CalculatorState {
    if (state.partial && state.operation) {
      return {
        total: operate(state.total || '0', state.operation, state.partial),
        operation: input,
      };
    }

    return {
      total: state.partial || '0',
      operation: input,
    };
  }
}
