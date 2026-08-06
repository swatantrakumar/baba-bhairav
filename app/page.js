import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  const t = await getTranslations('Home');
  const navT = await getTranslations('Navigation');

  return (
    <div className="min-h-screen flex flex-col items-center">
      


      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="/temple-hero.jpg" 
          alt="Baba Bhairav Sthan" 
          fill 
          className="object-cover z-0"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
        
        <div className="relative z-20 text-center text-white px-4">
          <h2 className="text-4xl md:text-7xl font-bold mb-4 drop-shadow-lg text-[var(--gold)]">{t('title')}</h2>
          <p className="text-xl md:text-3xl font-medium drop-shadow-md max-w-3xl mx-auto mb-8 font-sans">
            {t('welcome')}
          </p>
          <div className="flex gap-4 justify-center">
            <Link href={`/donate`} className="px-8 py-3 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-bold rounded-md shadow-lg transition-all font-sans transform hover:scale-105 border-2 border-[var(--primary)]">
              {navT('donate')}
            </Link>
            <Link href={`/live`} className="px-8 py-3 bg-transparent border-2 border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-white font-bold rounded-md shadow-lg transition-all font-sans transform hover:scale-105">
              {navT('darshan')}
            </Link>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full max-w-7xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-12">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-xl border-t-4 border-[var(--secondary)]">
          <h3 className="text-3xl font-bold text-[var(--secondary)] dark:text-[var(--primary)] mb-6 flex items-center gap-3">
            <span className="w-8 h-1 bg-[var(--primary)] inline-block"></span>
            {t('historyTitle')}
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-sans text-justify">
            {t('historyText')}
          </p>
          <div className="mt-8 p-4 bg-[var(--saffron-50)] dark:bg-slate-700 rounded-lg border-l-4 border-[var(--primary)]">
            <p className="font-semibold text-[var(--foreground)] dark:text-white font-sans italic">"Dharmo Rakshati Rakshitah"</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[var(--primary)] rounded-xl shadow-md p-6 text-white flex flex-col items-center justify-center text-center transform transition hover:-translate-y-2 cursor-pointer">
             <div className="text-4xl mb-2">🙏</div>
             <h4 className="font-bold text-xl">{t('liveDarshan')}</h4>
          </div>
          <div className="bg-[var(--secondary)] rounded-xl shadow-md p-6 text-white flex flex-col items-center justify-center text-center transform transition hover:-translate-y-2 cursor-pointer">
             <div className="text-4xl mb-2">✨</div>
             <h4 className="font-bold text-xl">{t('donation')}</h4>
          </div>
          <Link href="/location" className="bg-[var(--gold)] rounded-xl shadow-md p-6 text-white flex flex-col items-center justify-center text-center transform transition hover:-translate-y-2 cursor-pointer col-span-2">
             <div className="text-4xl mb-2">📍</div>
             <h4 className="font-bold text-xl text-black">{t('visitBaba')}</h4>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full bg-[var(--saffron-50)] dark:bg-slate-900 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--secondary)] dark:text-[var(--primary)] mb-6">{t('aboutTitle')}</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            {t('aboutText')}
          </p>
          <Link href="/about" className="inline-block px-8 py-3 bg-[var(--primary)] text-white font-bold rounded-md hover:bg-[var(--primary-hover)] transition-colors">{t('readFullHistory')}</Link>
        </div>
      </section>

      {/* Mini-Gallery Section */}
      <section className="w-full max-w-7xl mx-auto py-16 px-4">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--secondary)] dark:text-[var(--primary)]">{t('galleryTitle')}</h2>
          <Link href="/gallery" className="text-[var(--primary)] font-bold hover:underline">{t('viewAll')}</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-square bg-gray-200 dark:bg-slate-700 rounded-lg overflow-hidden relative">
              <Image src="/temple-hero.jpg" alt="Gallery preview" fill className="object-cover hover:scale-110 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full bg-white dark:bg-slate-800 py-16 px-4 border-t border-gray-100 dark:border-slate-700">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--secondary)] dark:text-[var(--primary)] mb-12">{t('testimonialsTitle')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "The peace I experience at Baba Bhairav Sthan is unmatched. The daily darshan fills my heart with devotion.", author: "Rajesh Kumar" },
              { text: "A truly divine and powerful temple. You can feel the energy the moment you step into the premises.", author: "Anita Sharma" },
              { text: "Visiting this temple has brought immense positivity and success to my family. Jai Baba Bhairav!", author: "Vikram Singh" }
            ].map((test, i) => (
              <div key={i} className="bg-[var(--saffron-50)] dark:bg-slate-700 p-8 rounded-xl shadow-md relative">
                <div className="text-4xl text-[var(--primary)] opacity-50 absolute top-4 left-4">"</div>
                <p className="text-gray-700 dark:text-gray-300 italic mb-6 relative z-10 pt-4">{test.text}</p>
                <p className="font-bold text-[var(--secondary)] dark:text-[var(--primary)]">- {test.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee Animation in CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 20s linear infinite;
        }
      `}} />
    </div>
  );
}
