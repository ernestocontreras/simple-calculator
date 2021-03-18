import DotEvaluator from './DotEvaluator';
import FunctionEvaluator from './FunctionEvaluator';
import NumberEvaluator from './NumberEvaluator';
import OperatorEvaluator from './OperatorEvaluator';

export default class ComposedEvaluator {
  private readonly evaluators: CalculatorInputEvaluator[];
  private state: CalculatorState;

  constructor() {
    this.evaluators = [
      new FunctionEvaluator(),
      new OperatorEvaluator(),
      new NumberEvaluator(),
      new DotEvaluator()
    ];

    this.state = { total: '0' };
  }

  public evaluate(input: string): string {
    const evaluator = this.evaluators.find((e) => e.canEvaluate(input));
    if (evaluator) {
      this.state = evaluator.evaluate(this.state, input);
    }

    return this.state.partial || this.state.total || '0';
  }
}
