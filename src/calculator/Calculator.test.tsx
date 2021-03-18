import { render, screen } from '@testing-library/react';
import Calculator from './Calculator';

test('renders all necessary buttons', () => {
  render(<Calculator />);
  const buttons = screen.getAllByRole('button');
  expect(buttons.length).toEqual(19);
});
