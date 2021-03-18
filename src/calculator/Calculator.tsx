import React, { ReactNode, SyntheticEvent } from 'react';
import ComposedEvaluator from './evaluators/ComposedEvaluator';
import { Functions, Operators } from './evaluators/common';

import './Calculator.css';

function Screen(props: any) {
  return (
    <div className="col-4">
      <div className="calculator-screen">{props.value}</div>
    </div>
  );
}

function Button(props: any) {
  const classes = ['calculator-button', props.gray ? 'gray' : '', props.orange ? 'orange' : ''];
  let className = classes.join(' ').trim();
  if (props.className) {
    className = className + ` ${props.className}`;
  }

  return (
    <button type="button" className={className} value={props.value} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default class Calculator extends React.Component {
  state = {
    result: '0',
  };

  private service: ComposedEvaluator;

  constructor(props: any) {
    super(props);
    this.service = new ComposedEvaluator();
  }

  private handleClick(event: SyntheticEvent<HTMLButtonElement>): void {
    const value = event.currentTarget.value;
    const result = this.service.evaluate(value);
    this.setState({ result: result });
  }

  render(): ReactNode {
    return (
      <div className="calculator">
        <Screen value={this.state.result} />

        <Button value={Functions.AC} gray onClick={(event) => this.handleClick(event)} />
        <Button value={Functions.NEGATE} gray onClick={(event) => this.handleClick(event)} />
        <Button value={Functions.PERCENT} gray onClick={(event) => this.handleClick(event)} />
        <Button value={Operators.DIVISION} orange onClick={(event) => this.handleClick(event)} />

        <Button value="7" onClick={(event) => this.handleClick(event)} />
        <Button value="8" onClick={(event) => this.handleClick(event)} />
        <Button value="9" onClick={(event) => this.handleClick(event)} />
        <Button value={Operators.TIMES} orange onClick={(event) => this.handleClick(event)} />

        <Button value="4" onClick={(event) => this.handleClick(event)} />
        <Button value="5" onClick={(event) => this.handleClick(event)} />
        <Button value="6" onClick={(event) => this.handleClick(event)} />
        <Button value={Operators.SUBSTRACTION} orange onClick={(event) => this.handleClick(event)} />

        <Button value="1" onClick={(event) => this.handleClick(event)} />
        <Button value="2" onClick={(event) => this.handleClick(event)} />
        <Button value="3" onClick={(event) => this.handleClick(event)} />
        <Button value={Operators.ADDITION} orange onClick={(event) => this.handleClick(event)} />

        <Button value="0" onClick={(event) => this.handleClick(event)} className="col-2" />
        <Button value="." onClick={(event) => this.handleClick(event)} />
        <Button value={Functions.EQUALS} orange onClick={(event) => this.handleClick(event)} />
      </div>
    );
  }
}
