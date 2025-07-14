import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Vision: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
            {t('vision.title')}
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {t('vision.description')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Vision;