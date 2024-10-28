import { render, screen } from '@testing-library/react';
import App from './App';

test('renders front page text', () => {
  render(<App />);
  const paragraphElement = screen.getByText(/Front page example/i);
  expect(paragraphElement).toBeInTheDocument();
});
