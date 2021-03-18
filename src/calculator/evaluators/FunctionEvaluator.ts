import { Functions, operate } from './common';

export default class FunctionEvaluator implements CalculatorInputEvaluator {
  canEvaluate(input: string) {
    return Object.values(Functions).some((value) => value === input);
  }

  evaluate(state: CalculatorState, input: string): CalculatorState {
    switch (input) {
      case Functions.AC: {
        return { total: '0' };
      }
      case Functions.NEGATE: {
        if (state.partial) {
          return { partial: (-1 * parseFloat(state.partial)).toString() };
        }
        if (state.total) {
          return { total: (-1 * parseFloat(state.total)).toString() };
        }

        return { total: '0' };
      }
      case Functions.PERCENT: {
        if (state.operation && state.partial) {
          const result = operate(state.total || '0', state.operation, state.partial);
          return {
            total: (parseFloat(result) / 100.0).toString(),
          };
        }

        if (state.partial) {
          return {
            partial: (parseFloat(state.partial) / 100.0).toString(),
          };
        }

        return { total: '0' };
      }
      case Functions.EQUALS: {
        if (state.partial && state.operation) {
          return {
            total: operate(state.total || '0', state.operation, state.partial),
          };
        } else {
          return { total: state.partial || state.total };
        }
      }
      default: {
        return { total: '0' };
      }
    }
  }
}
