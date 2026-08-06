import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

import './globals.css';

import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: 'Baba Bhairav Sthan',
  description: 'Aanad Bhairav Temple, Barahsher',
};

import { getUserLocale } from '@/services/locale';

export default async function LocaleLayout({
  children,
}) {
  const locale = await getUserLocale();
  
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="min-h-screen flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <Header locale={locale} />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
