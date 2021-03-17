import { render, screen } from '@testing-library/react';
import Calculator from './Calculator';

test('renders learn react link', () => {
  render(<Calculator />);
  const text = screen.getByText(/0/i);
  expect(text).toBeInTheDocument();
});
