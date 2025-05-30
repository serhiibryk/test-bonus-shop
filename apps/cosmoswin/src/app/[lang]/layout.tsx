import { ReactNode } from 'react';

import { UserProvider } from '@repo/shared/contexts/UserContext';

import TranslationsProvider from 'src/components/TranslationProvider';
import ProtectedRoute from 'src/components/ProtectedRoute';
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
        <UserProvider>
          <ProtectedRoute>
            {children}
          </ProtectedRoute>
        </UserProvider>
      </TranslationsProvider>
    </div>
  );
};

export default RootLayout;
