'use client';

import { FC, PropsWithChildren } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';

import betfinalTheme from 'src/theme/theme';


const ThemeClientWrapper: FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={betfinalTheme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);

export default ThemeClientWrapper;
