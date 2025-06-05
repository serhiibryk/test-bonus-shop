import { ReactNode } from 'react';
import { Assistant } from 'next/font/google';

import { UserProvider } from '@repo/shared/contexts/UserContext';
import Header from '@repo/ui/src/components/Header';

import TranslationsProvider from 'src/components/TranslationProvider';
import ProtectedRoute from 'src/components/ProtectedRoute';
import ThemeClientWrapper from 'src/components/ThemeClientWrapper';
import initTranslations from './i18n';
import "./globals.css";


type Props = {
  children: ReactNode;
  params: Promise<{ lang: string }>
};

const assistant_init = Assistant({
  subsets: ['hebrew'],
  weight: ['400', '600', '700'],
  variable: '--font-assistant',
});

const RootLayout = async ({ children, params }: Props) => {
  const { lang } = await Promise.resolve(params);
  const { resources } = await initTranslations(lang, ['common']);

  return (
    <html>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </head>
      <body className={assistant_init.variable} suppressHydrationWarning={true}>
      <TranslationsProvider
        resources={resources}
        locale={lang}
        namespaces={['common']}
      >
        <ThemeClientWrapper>
          <UserProvider>
            <ProtectedRoute>
              <Header />

              {children}
            </ProtectedRoute>
          </UserProvider>
          </ThemeClientWrapper>
      </TranslationsProvider>
      </body>
    </html>
  );
}

export default RootLayout;