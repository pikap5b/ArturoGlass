import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ru' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors duration-200 bg-white"
      title={language === 'en' ? 'Switch to Russian' : 'Переключиться на английский'}
    >
      {language === 'en' ? (
        <>
          <span className="text-xl">🇷🇺</span>
          <span className="text-sm font-medium text-gray-700">RU</span>
        </>
      ) : (
        <>
          <span className="text-xl">🇬🇧</span>
          <span className="text-sm font-medium text-gray-700">EN</span>
        </>
      )}
    </button>
  );
};

export default LanguageSwitcher; 