'use client';

import { FC, PropsWithChildren } from 'react';
import { I18nextProvider } from 'react-i18next';
import { createInstance } from 'i18next';

import initTranslations from 'src/app/i18n';

interface TranslationsProviderProps {
  locale: string;
  namespaces: unknown;
  resources: unknown,
}

const TranslationsProvider: FC<PropsWithChildren<TranslationsProviderProps>> = ({
  children,
  locale,
  namespaces,
  resources,
}) => {
  const i18n = createInstance();

  initTranslations(locale, namespaces, i18n, resources);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default TranslationsProvider;
