'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useTransition } from 'react';

import { setUserLocale } from '@/services/locale';

export default function Header({ locale }) {
  const t = useTranslations('Home');
  const navT = useTranslations('Navigation');
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const headerT = useTranslations('Header');

  const handleLanguageChange = async (e) => {
    const newLocale = e.target.value;
    await setUserLocale(newLocale);
    window.location.reload();
  };

  return (
    <>
      {/* Top Marquee */}
      <div className="w-full bg-[var(--secondary)] text-white py-2 overflow-hidden">
        <div className="whitespace-nowrap animate-marquee">
          <span className="mx-4 text-sm font-semibold">{headerT('marquee')}</span>
          <span className="mx-4 text-sm font-semibold">{headerT('marquee')}</span>
        </div>
      </div>

      {/* Navigation Header */}
      <header className="w-full bg-white dark:bg-slate-900 shadow-md border-b-4 border-[var(--primary)] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[var(--primary)] rounded-full flex items-center justify-center text-white font-bold text-xl">BB</div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-[var(--secondary)] dark:text-[var(--primary)] leading-tight">{t('title')}</h1>
              <p className="text-xs text-gray-600 dark:text-gray-400 font-sans tracking-widest uppercase hidden md:block">{t('subtitle')}</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6 font-sans font-semibold text-sm">
            <Link href="/" className="hover:text-[var(--primary)] transition-colors">{navT('home')}</Link>
            <Link href="/about" className="hover:text-[var(--primary)] transition-colors">{navT('about')}</Link>
            <Link href="/gallery" className="hover:text-[var(--primary)] transition-colors">{navT('gallery')}</Link>
            <Link href="/location" className="hover:text-[var(--primary)] transition-colors">{navT('location')}</Link>
            
            <div className="flex items-center gap-2 border-l border-gray-300 pl-4">
              <span className="text-xl">🌐</span>
              <select 
                value={locale} 
                onChange={handleLanguageChange}
                className="bg-gray-100 dark:bg-slate-800 border-none outline-none text-sm font-semibold p-1 rounded cursor-pointer"
              >
                <option value="en">English</option>
                <option value="hi">हिंदी</option>
              </select>
            </div>

            <Link href="/login" className="hover:text-[var(--primary)] transition-colors">{navT('login')}</Link>
            <Link href="/signup" className="px-4 py-2 bg-[var(--primary)] text-white rounded hover:bg-[var(--primary-hover)] transition-colors">{navT('signup')}</Link>
          </nav>
        </div>
      </header>
    </>
  );
}
