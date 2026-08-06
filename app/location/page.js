import { getTranslations } from 'next-intl/server';

export default async function Location() {
  const t = await getTranslations('Location');

  return (
    <div className="min-h-screen flex flex-col items-center p-8 bg-gray-50 dark:bg-slate-900">
      <h1 className="text-4xl font-bold text-[var(--primary)] mt-12 mb-4">{t('title')}</h1>
      
      <p className="text-lg text-center max-w-2xl mb-12 text-gray-700 dark:text-gray-300">
        {t('description')}
      </p>

      <div className="w-full max-w-4xl shadow-2xl rounded-2xl overflow-hidden border-2 border-[var(--primary)]">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1500.896695287049!2d86.54351052608381!3d25.98230090000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ee152db8ee363d%3A0x8b9c460617a3b433!2sBaba%20bhairav%20sthan!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
          width="100%" 
          height="600" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
