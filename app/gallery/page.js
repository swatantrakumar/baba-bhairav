'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const dummyImages = [
  { id: 1, year: '2026', src: '/temple-hero.jpg', title: 'Maha Shivratri Celebration' },
  { id: 2, year: '2026', src: '/temple-hero.jpg', title: 'Temple Renovation Completion' },
  { id: 3, year: '2026', src: '/temple-hero.jpg', title: 'Daily Evening Aarti' },
  { id: 4, year: '2025', src: '/temple-hero.jpg', title: 'Sawan Mela Gatherings' },
  { id: 5, year: '2025', src: '/temple-hero.jpg', title: 'Temple Foundation Day' },
  { id: 6, year: '2024', src: '/temple-hero.jpg', title: 'Early Morning Darshan' },
  { id: 7, year: '2024', src: '/temple-hero.jpg', title: 'Devotees Offering Prayers' },
  { id: 8, year: '2024', src: '/temple-hero.jpg', title: 'Temple Illumination at Night' },
];

export default function GalleryPage() {
  const t = useTranslations('Gallery');
  const [selectedYear, setSelectedYear] = useState('All');
  
  const years = ['All', '2026', '2025', '2024'];

  const filteredImages = selectedYear === 'All' 
    ? dummyImages 
    : dummyImages.filter(img => img.year === selectedYear);

  return (
    <div className="w-full min-h-screen bg-gray-50 dark:bg-slate-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--secondary)] dark:text-[var(--primary)] mb-4">{t('title')}</h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">{t('subtitle')}</p>
        </div>

        {/* Year Filter */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {years.map(year => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-6 py-2 rounded-full font-bold transition-colors ${
                selectedYear === year 
                  ? 'bg-[var(--primary)] text-white shadow-md' 
                  : 'bg-white text-gray-700 hover:bg-[var(--saffron-50)]'
              }`}
            >
              {year === 'All' ? t('all') : year}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((img) => (
            <div key={img.id} className="group relative bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image 
                  src={img.src} 
                  alt={img.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-bold text-lg">{img.title}</h3>
                <span className="text-[var(--gold)] text-sm">{img.year}</span>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            {t('noImages')}
          </div>
        )}
      </div>
    </div>
  );
}
