'use client';

import { FC, PropsWithChildren, useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import { createInstance, i18n as I18nInstance, Resource } from 'i18next';

import initTranslations from 'src/app/i18n';

type Namespace = 'common' | 'home' | 'about';

interface TranslationsProviderProps {
  locale: string;
  namespaces: Namespace[];
  resources: Resource;
}

const TranslationsProvider: FC<PropsWithChildren<TranslationsProviderProps>> = ({
  children,
  locale,
  namespaces,
  resources,
}) => {
  const [i18nInstance, setI18nInstance] = useState<I18nInstance | null>(null);

  useEffect(() => {
    const instance = createInstance();
    initTranslations(locale, namespaces, instance, resources).then(() => {
      setI18nInstance(instance);
    });
  }, [locale, namespaces, resources]);

  if (!i18nInstance) return null;

  return <I18nextProvider i18n={i18nInstance}>{children}</I18nextProvider>;
};

export default TranslationsProvider;
