'use client';

import { FC, PropsWithChildren, useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import { createInstance } from 'i18next';

import initTranslations from 'src/app/i18n';

interface TranslationsProviderProps {
  locale: string;
  namespaces: string[];
}

const TranslationsProvider: FC<PropsWithChildren<TranslationsProviderProps>> = ({
  children,
  locale,
  namespaces,
}) => {
  const [i18nInstance, setI18nInstance] = useState<ReturnType<typeof createInstance> | null>(null);

  useEffect(() => {
    const i18n = createInstance();

    initTranslations(locale, namespaces, i18n).then(() => {
      setI18nInstance(i18n);
    });
  }, [locale, namespaces]);

  if (!i18nInstance) return null;

  return <I18nextProvider i18n={i18nInstance}>{children}</I18nextProvider>;
};

export default TranslationsProvider;
