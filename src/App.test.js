import { render, screen } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
  const linkElement = screen.getByText(/the lord of the rings/i);
  expect(linkElement).toBeInTheDocument();
});
