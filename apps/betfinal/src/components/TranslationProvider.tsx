'use client';

import { FC, PropsWithChildren } from 'react';
import { I18nextProvider } from 'react-i18next';

import { useInitI18n } from 'src/hooks/useInitI18n';

interface TranslationsProviderProps {
  locale: string;
  namespaces: string[];
}

const TranslationsProvider: FC<PropsWithChildren<TranslationsProviderProps>> = ({
  children,
  locale,
  namespaces,
}) => {
  const i18nInstance = useInitI18n(locale, namespaces);

  if (!i18nInstance) return null;

  return <I18nextProvider i18n={i18nInstance}>{children}</I18nextProvider>;
};

export default TranslationsProvider;
