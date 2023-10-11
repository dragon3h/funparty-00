import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

describe('Button', () => {
  test('button test', () => {
    render(<Button>Test </Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('button test with class', () => {
    render(<Button themeButton={ThemeButton.CLEAR}>Test </Button>);
    expect(screen.getByText('Test')).toHaveClass('clear');
    screen.debug();
  });
});
