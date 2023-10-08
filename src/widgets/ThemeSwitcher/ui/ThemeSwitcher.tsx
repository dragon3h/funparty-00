import { FC } from 'react';
import slc from './ThemeSwitcher.module.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import darkTheme from 'shared/assets/icons/dark-theme.svg';

export const ThemeSwitcher: FC = () => {
  const { theme, switchTheme } = useTheme();
  
  return (
    <button onClick={switchTheme}>Switch Theme</button>
  );
}