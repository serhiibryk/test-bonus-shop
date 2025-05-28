import { PropsWithChildren } from 'react';
import { LangParams } from '@repo/shared/types/common';

import TranslationsProvider from 'src/components/TranslationProvider';
import initTranslations from '../i18n';
import "../globals.css";

export const dynamic = 'force-dynamic';

const RootLayout = async ({
  children,
  params,
}: PropsWithChildren<{ params: LangParams }>) => {
  const { lang } = await Promise.resolve(params);
  const { resources } = await initTranslations(lang, ['common']);

  return (
    <div id="app-content">
      <TranslationsProvider
        resources={resources}
        locale={lang}
        namespaces={['common']}
      >
        {children}
      </TranslationsProvider>
    </div>
  );
};

export default RootLayout;
