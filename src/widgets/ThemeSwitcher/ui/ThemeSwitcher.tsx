import { type FC } from 'react';
import slc from './ThemeSwitcher.module.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import DarkIcon from 'shared/assets/icons/dark-theme.svg';
import LightIcon from 'shared/assets/icons/light-theme.svg';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

export const ThemeSwitcher: FC = () => {
  const { theme, switchTheme } = useTheme();

  return (
    <Button onClick={switchTheme} themeButton={ThemeButton.CLEAR}>
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
