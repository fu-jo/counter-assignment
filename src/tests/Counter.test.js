// import necessary react testing library helpers here
// import the Counter component here
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Counter from "../components/Counter";

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />)
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  expect(screen.getByText(/0/)).toBeInTheDocument();
});

test('clicking + increments the count', async () => {
  // Complete the unit test below based on the objective in the line above
  const count = parseInt(screen.getByTestId(/count/));
  await userEvent.click(screen.getByText("+"));
  expect(count).toBe(count+1);
});

test('clicking - decrements the count', async () => {
  // Complete the unit test below based on the objective in the line above
  const count = parseInt(screen.getByTestId(/count/));
  await userEvent.click(screen.getByText("-"));
  expect(count).toBe(count-1);
});
