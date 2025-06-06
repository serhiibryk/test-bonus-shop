import { useEffect, useState } from 'react';
import { createInstance } from 'i18next';

import initTranslations from 'src/app/i18n';

export const useInitI18n = (locale: string, namespaces: string[]) => {
  const [i18nInstance, setI18nInstance] =
    useState<ReturnType<typeof createInstance> | null>(null);

  useEffect(() => {
    const i18n = createInstance();

    initTranslations(locale, namespaces, i18n).then(() => {
      setI18nInstance(i18n);
    });
  }, [locale, namespaces]);

  return i18nInstance;
};
