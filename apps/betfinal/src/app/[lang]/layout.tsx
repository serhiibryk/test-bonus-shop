import { ReactNode } from 'react';
import { Assistant } from 'next/font/google';

import ProtectedRoute from '@repo/ui/src/components/ProtectedRoute';
import { UserProvider } from '@repo/shared/contexts/UserContext';
import { BrandTypeEnum } from '@repo/shared/types/common';
import { getIsRtlDir } from '@repo/shared/utils/common';
import Header from '@repo/ui/src/components/Header';

import TranslationsProvider from 'src/components/TranslationProvider';
import ThemeClientWrapper from 'src/components/ThemeClientWrapper';

type Props = {
  children: ReactNode;
  params: Promise<{ lang: string }>;
};

const assistant_init = Assistant({
  subsets: ['hebrew'],
  weight: ['400', '600', '700'],
  variable: '--font-assistant',
});

const RootLayout = async ({ children, params }: Props) => {
  const resolvedParams = await params;
  const { lang } = resolvedParams;

  const isRTL = getIsRtlDir(lang);
  
  return (
    <html lang={lang} dir={isRTL ? 'rtl' : 'ltr'}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </head>
      <body className={assistant_init.variable} suppressHydrationWarning={true}>
      <TranslationsProvider
        locale={lang}
        namespaces={['common']}
      >
        <ThemeClientWrapper>
          <UserProvider>
            <ProtectedRoute>
              <Header brand={BrandTypeEnum.betfinal} />

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