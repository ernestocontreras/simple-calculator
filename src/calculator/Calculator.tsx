import React, { ReactNode, SyntheticEvent } from 'react';
import './Calculator.css';

function Screen(props: any) {
  return <input type="text" className="calculator-screen col-4" value="0" readOnly />;
}

function Button(props: any) {
  const classes = ['calculator-button', props.function ? 'function' : '', props.operator ? 'operator' : ''];

  let className = classes.join(' ').trim();
  if (props.className) {
    className = className + ` ${props.className}`;
  }

  return (
    <button type="button" className={className} value="{props.value}" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default class Calculator extends React.Component {
  private handleClick(event: SyntheticEvent): void {}

  render(): ReactNode {
    return (
      <div className="calculator">
        <Screen />

        <Button value="AC" function onClick={this.handleClick} />
        <Button value="+/-" function onClick={this.handleClick} />
        <Button value="&#37;" function onClick={this.handleClick} />
        <Button value="&divide;" operator onClick={this.handleClick} />

        <Button value="7" onClick={this.handleClick} />
        <Button value="8" onClick={this.handleClick} />
        <Button value="9" onClick={this.handleClick} />
        <Button value="&times;" operator onClick={this.handleClick} />

        <Button value="4" onClick={this.handleClick} />
        <Button value="5" onClick={this.handleClick} />
        <Button value="6" onClick={this.handleClick} />
        <Button value="&minus;" operator onClick={this.handleClick} />

        <Button value="1" onClick={this.handleClick} />
        <Button value="2" onClick={this.handleClick} />
        <Button value="3" onClick={this.handleClick} />
        <Button value="+" operator onClick={this.handleClick} />

        <Button value="0" onClick={this.handleClick} className="col-2" />
        <Button value="." onClick={this.handleClick} />
        <Button value="=" operator onClick={this.handleClick} />
      </div>
    );
  }
}
