import { FC, PropsWithChildren, ReactNode } from 'react';
import { dir } from 'i18next';

import { LangParams } from '@repo/shared/types/common';

import TranslationsProvider from 'src/components/TranslationProvider';
import { Assistant } from 'next/font/google';
import initTranslations from './i18n';
import "./globals.css";

export const dynamic = 'force-dynamic';

const assistant_init = Assistant({
  subsets: ['hebrew'],
  weight: ['400', '600', '700'],
  variable: '--font-assistant',
});

type Props = {
  children: ReactNode;
  params: LangParams;
};

const RootLayout: FC<PropsWithChildren<Props>> = async ({
  children,
  params,
}) => {
  const { resources } = await initTranslations(params.lang, ['common']);

  return (
    <html lang={params.lang} dir={dir(params.lang)}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </head>
      <body className={assistant_init.variable} suppressHydrationWarning={true}>
        <div id="app-content">
          <TranslationsProvider
            resources={resources}
            locale={params.lang}
            namespaces={['common']}
          >
            {children}
          </TranslationsProvider>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
