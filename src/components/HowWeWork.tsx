import React from 'react';
import { Target, Users, Cog } from 'lucide-react';

const HowWeWork: React.FC = () => {
  const principles = [
    {
      icon: Target,
      title: 'Perfect Planning',
      description: 'Every project begins with meticulous planning and detailed consultation to ensure your vision is perfectly executed.',
    },
    {
      icon: Users,
      title: 'Professional Workers',
      description: 'Our skilled craftsmen bring years of experience and expertise to every installation, ensuring quality results.',
    },
    {
      icon: Cog,
      title: 'First Working Process',
      description: 'We follow a systematic approach that prioritizes efficiency, safety, and superior craftsmanship in every step.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-8">
            HOW WE WORK
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            At ArturoGlass, we pride ourselves on delivering exceptional service and top-quality custom glass installations. Here's why we stand out:
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