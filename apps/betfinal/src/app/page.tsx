import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import i18nConfig from '@repo/shared/i18n/i18nConfig';

const RootPage = async () => {
  const cookieStore = await cookies();
  const langFromCookie = cookieStore.get('lang')?.value;

  const locale = i18nConfig.locales.includes(langFromCookie || '')
    ? langFromCookie
    : i18nConfig.defaultLocale;

  redirect(`/${locale}`);
}

export default RootPage;