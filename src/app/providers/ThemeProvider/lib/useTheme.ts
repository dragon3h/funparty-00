import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
  theme: Theme
  switchTheme: () => void
}

export const useTheme = (): UseThemeResult => {
  const { theme = Theme.LIGHT, setTheme, } = useContext(ThemeContext);

  const switchTheme = (): void => {
    if (setTheme != null) {
      setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
    }
  };

  return { theme, switchTheme, };
};
