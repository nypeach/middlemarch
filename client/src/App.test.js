import { render, screen, act, fireEvent } from '@testing-library/react';
import App from './App';

it('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText('MIDDLEMARCH');
  expect(linkElement).toBeInTheDocument();
});
it('should show more text on Read More', () => {
  render(<App />);
  const originalDiv = screen.getByTestId("OriginalText");
  expect(originalDiv).toBeInTheDocument();
  act(() => {
    const button = screen.getByTestId('OurFirmReadMore');
    fireEvent.click(button);
  })
  const readMoreDiv = screen.getByTestId("ReadMoreText");
  expect(readMoreDiv).toBeInTheDocument();

});

