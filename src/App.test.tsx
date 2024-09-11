import React from 'react';
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import App from './App';

test('renders learn react link', () => {
  // Wrap the App component in MemoryRouter to provide the routing context
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
