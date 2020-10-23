import lightTheme from 'constants/styles/lightTheme/index';
import darkTheme from 'constants/styles/darkTheme/index';
import { LIGHT_THEME_NAME, DARK_THEME_NAME } from 'constants/index';
import { ThemeNameProps, Themes } from 'constants/styles/types';

export const THEMES: Themes = {
  [LIGHT_THEME_NAME]: {
    themeName: LIGHT_THEME_NAME,
    ...lightTheme,
  },
  [DARK_THEME_NAME]: {
    themeName: DARK_THEME_NAME,
    ...darkTheme,
  },
};

export const getTheme = ({ themeName }: ThemeNameProps) => {
  const theme = THEMES[themeName];
  return {
    ...theme,
  };
};
