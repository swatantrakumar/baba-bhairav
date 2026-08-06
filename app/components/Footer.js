import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

export default async function Footer() {
  const t = await getTranslations('Footer');
  const navT = await getTranslations('Navigation');

  return (
    <footer className="w-full bg-[var(--secondary)] text-white pt-16 pb-8 font-sans border-t-[12px] border-[var(--primary)] mt-auto">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12 mb-12">
        {/* Brand & About */}
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-[var(--primary)] rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg border-2 border-white">BB</div>
            <div>
              <h2 className="text-2xl font-bold text-[var(--gold)]">{t('brand')}</h2>
              <p className="text-sm text-gray-300 tracking-wider">{t('location')}</p>
            </div>
          </div>
          <p className="text-gray-300 leading-relaxed text-sm max-w-md">
            {t('description')}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-6 border-b-2 border-[var(--primary)] inline-block pb-1">{t('quickLinks')}</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><Link href="/" className="hover:text-[var(--gold)] transition-colors">{navT('home')}</Link></li>
            <li><Link href="/about" className="hover:text-[var(--gold)] transition-colors">{navT('about')}</Link></li>
            <li><Link href="/gallery" className="hover:text-[var(--gold)] transition-colors">{navT('gallery')}</Link></li>
            <li><Link href="/donate" className="hover:text-[var(--gold)] transition-colors">{navT('donate')}</Link></li>
            <li><Link href="/location" className="hover:text-[var(--gold)] transition-colors">{navT('location')}</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-6 border-b-2 border-[var(--primary)] inline-block pb-1">{t('contactUs')}</h3>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-[var(--gold)] text-lg">📍</span>
              <span dangerouslySetInnerHTML={{ __html: t('address') }}></span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[var(--gold)] text-lg">📞</span>
              <span>+91 XXXXX XXXXX</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[var(--gold)] text-lg">✉️</span>
              <span>info@bababhairavsthan.org</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-red-800/50 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400">
        <p>{t('rights')}</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="#" className="hover:text-white transition-colors">{t('privacy')}</Link>
          <Link href="#" className="hover:text-white transition-colors">{t('terms')}</Link>
        </div>
      </div>
    </footer>
  );
}
