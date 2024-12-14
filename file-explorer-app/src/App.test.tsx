import React from 'react';
import { getByTestId, render } from '@testing-library/react';
import App from './App';

test('renders File Explorer Component with Provider', () => {
  render(<App />);  
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
