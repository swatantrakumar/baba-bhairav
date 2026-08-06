import { getRequestConfig } from 'next-intl/server';
import { getUserLocale } from '@/services/locale';

const locales = ['en', 'hi'];
const defaultLocale = 'en';

export default getRequestConfig(async () => {
  let locale = await getUserLocale();

  if (!locale || !locales.includes(locale)) {
    locale = defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
