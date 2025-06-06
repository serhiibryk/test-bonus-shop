import { createInstance, i18n as I18nType, InitOptions, Resource } from 'i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';
import resourcesToBackend from 'i18next-resources-to-backend';

import i18nConfig from '@repo/shared/i18n/i18nConfig';

type InitTranslationsResult = {
  i18n: I18nType;
  resources: Resource;
  t: I18nType['t'];
};

export default async function initTranslations(
  locale: string,
  namespaces: string[],
  i18nInstance?: I18nType,
  resources?: InitOptions['resources'],
): Promise<InitTranslationsResult> {
  const instance = i18nInstance || createInstance();

  instance.use(initReactI18next);

  if (!resources) {
    instance.use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`@repo/shared/i18n/${language}/${namespace}.json`),
      ),
    );
  }

  await instance.init({
    lng: locale,
    resources,
    fallbackLng: i18nConfig.defaultLocale,
    supportedLngs: i18nConfig.locales,
    defaultNS: 'common',
    fallbackNS: 'common',
    ns: namespaces,
    preload: resources ? [] : i18nConfig.locales,
  });

  return {
    i18n: instance,
    resources: instance.services.resourceStore.data,
    t: instance.t,
  };
}
