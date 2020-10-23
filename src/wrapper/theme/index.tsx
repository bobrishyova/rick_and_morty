import React, { useMemo } from 'react';
import { ThemeProvider } from 'styled-components';
import { getTheme } from 'constants/styles/index';
import GlobalStyle from 'wrapper/theme/globalStyle/index';
import { ThemeProps } from './types';

const Theme = ({ children, theme }: ThemeProps) => {
  const themeObject = useMemo(() => getTheme({ themeName: theme }), [theme]);
  return (
    <ThemeProvider theme={themeObject}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
