import { ReactNode } from 'react';

import TranslationsProvider from 'src/components/TranslationProvider';
import initTranslations from '../i18n';
import "../globals.css";

export const dynamic = 'force-dynamic';

type Props = {
  children: ReactNode;
  params: Promise<{ lang: string }>
};

const RootLayout = async ({ children, params }: Props) => {
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
