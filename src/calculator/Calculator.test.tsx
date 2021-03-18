import { fireEvent, render, screen } from '@testing-library/react';
import Calculator from './Calculator';

test('Renders all necessary buttons', () => {
  render(<Calculator />);

  const buttons = screen.getAllByRole('button');
  expect(buttons.length).toEqual(19);
});

test('Renders operation "5 + 5 +" it should display "10"', () => {
  render(<Calculator />);

  fireEvent.click(button('5'));
  fireEvent.click(button('+'));
  fireEvent.click(button('5'));
  fireEvent.click(button('−'));

  expect(display()).toContainHTML('10');
});

/**
 * @returns A button with the given value from rendered screen.
 */
function button(value: string): HTMLElement {
  const found = screen.getAllByRole('button').find((e) => (e as any).value === value);
  if (found) {
    return found;
  }

  throw new Error(`Unable to find a button with value ${value}`);
}

/**
 * @returns A div for calculator screen from rendered screen.
 */
function display(): any {
  return document.getElementsByClassName('calculator-screen').item(0);
}
