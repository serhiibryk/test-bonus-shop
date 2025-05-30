import { ReactNode } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { Assistant } from 'next/font/google';

import betfinalTheme from '../theme/theme';

const assistant_init = Assistant({
  subsets: ['hebrew'],
  weight: ['400', '600', '700'],
  variable: '--font-assistant',
});

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </head>
      <body className={assistant_init.variable} suppressHydrationWarning={true}>
        <ThemeProvider theme={betfinalTheme}>
        <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
