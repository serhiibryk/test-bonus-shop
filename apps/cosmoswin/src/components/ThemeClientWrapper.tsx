'use client';

import { FC, PropsWithChildren } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';

import cosmoswinTheme from 'src/theme/theme';


const ThemeClientWrapper: FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={cosmoswinTheme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);

export default ThemeClientWrapper;
