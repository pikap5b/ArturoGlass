import React from 'react';
import { Target, Users, Cog } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const HowWeWork: React.FC = () => {
  const { t } = useLanguage();

  const principles = [
    {
      icon: Target,
      title: t('howWeWork.steps.consultation.title'),
      description: t('howWeWork.steps.consultation.description'),
    },
    {
      icon: Users,
      title: t('howWeWork.steps.design.title'),
      description: t('howWeWork.steps.design.description'),
    },
    {
      icon: Cog,
      title: t('howWeWork.steps.installation.title'),
      description: t('howWeWork.steps.installation.description'),
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-8">
            {t('howWeWork.title')}
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {t('howWeWork.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {principles.map((principle, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#01ccff] rounded-full mb-6 group-hover:bg-black transition-colors duration-300">
                <principle.icon size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">{principle.title}</h3>
              <p className="text-gray-600 leading-relaxed">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;