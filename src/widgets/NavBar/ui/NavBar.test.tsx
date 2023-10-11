import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { NavBar } from 'widgets/NavBar/ui/NavBar';

describe('NavBar', () => {
  test('NavBar test', () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });
});
