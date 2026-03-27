import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the CBDAS dashboard', () => {
  render(<App />);
  const titleElement = screen.getByText(/CBDAS/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders sidebar navigation items', () => {
  render(<App />);
  expect(screen.getByRole('button', { name: /dashboard/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /employees/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /attendance/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /reports/i })).toBeInTheDocument();
});

test('renders dark mode toggle button', () => {
  render(<App />);
  const darkModeButton = screen.getByLabelText(/switch to dark mode/i);
  expect(darkModeButton).toBeInTheDocument();
});
