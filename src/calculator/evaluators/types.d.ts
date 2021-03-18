/**
 * The state of the calculator at a certain time.
 */
interface CalculatorState {
  /**
   * Total result of the calculator.
   */
  total?: string;

  /**
   * An intermediate state before generate a total result.
   */
  partial?: string | null;

  /**
   * An intermediate operation before generate a total result.
   */
  operation?: string | null;
}

/**
 * Represents a class that can take an input string, evaluate it with a given calculator state and return a new state.
 */
interface CalculatorInputEvaluator {
  /**
   * Determine if the given input can be evaluated using this evaluator.
   *
   * @param input The input to evaluate.
   */
  canEvaluate(input: string): boolean;

  /**
   * Perform an evaluation of the input with the given state and returns the new state.
   *
   * @param state The initial state.
   * @param input The input to evaluate.
   */
  evaluate(state: CalculatorState, input: string): CalculatorState;
}
