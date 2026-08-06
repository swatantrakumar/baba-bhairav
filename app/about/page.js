import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

export default async function AboutPage() {
  const t = await getTranslations('About');

  return (
    <div className="w-full min-h-screen bg-gray-50 dark:bg-slate-900 pb-16">
      
      {/* Hero */}
      <div className="w-full h-[40vh] relative">
        <Image src="/temple-hero.jpg" alt="Baba Bhairav Sthan" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">{t('title')}</h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 mt-16">
        <div className="bg-white dark:bg-slate-800 p-8 md:p-12 rounded-xl shadow-xl border-t-4 border-[var(--primary)]">
          <h2 className="text-3xl font-bold text-[var(--secondary)] dark:text-[var(--primary)] mb-6 border-b-2 border-gray-100 dark:border-slate-700 pb-4">
            {t('subtitle')}
          </h2>
          
          <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-6 text-justify">
            <p>{t('p1')}</p>
            <p>{t('p2')}</p>
            <p>{t('p3')}</p>
            <p>{t('p4')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
