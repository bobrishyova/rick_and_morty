import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'constants/styles/defaultTheme';

const Theme = ({ children }: any) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
