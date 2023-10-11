import { render, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/index';

describe('Sidebar', () => {
  test('button test', () => {
    render(<Sidebar />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
