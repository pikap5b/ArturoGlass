import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ImageModal from './ImageModal';

const ServicesPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const { t } = useLanguage();

  const services = [
    {
      title: t('servicesPage.services.glassStaircases.title'),
      description: t('servicesPage.services.glassStaircases.description'),
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    },
    {
      title: t('servicesPage.services.curvedGlassStaircases.title'),
      description: t('servicesPage.services.curvedGlassStaircases.description'),
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    },
    {
      title: t('servicesPage.services.slidingGlassDoors.title'),
      description: t('servicesPage.services.slidingGlassDoors.description'),
      image: 'https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    },
    {
      title: t('servicesPage.services.officeGlazing.title'),
      description: t('servicesPage.services.officeGlazing.description'),
      image: 'https://images.pexels.com/photos/1571446/pexels-photo-1571446.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    },
    {
      title: t('servicesPage.services.glassCeilings.title'),
      description: t('servicesPage.services.glassCeilings.description'),
      image: 'https://images.pexels.com/photos/1571448/pexels-photo-1571448.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    },
    {
      title: t('servicesPage.services.curvedBalconyGlass.title'),
      description: t('servicesPage.services.curvedBalconyGlass.description'),
      image: 'https://images.pexels.com/photos/1571451/pexels-photo-1571451.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    },
    {
      title: t('servicesPage.services.glassDoors.title'),
      description: t('servicesPage.services.glassDoors.description'),
      image: 'https://images.pexels.com/photos/1571454/pexels-photo-1571454.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    },
    {
      title: t('servicesPage.services.mirrors.title'),
      description: t('servicesPage.services.mirrors.description'),
      image: 'https://images.pexels.com/photos/1571455/pexels-photo-1571455.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    },
    {
      title: t('servicesPage.services.glassShowerEnclosures.title'),
      description: t('servicesPage.services.glassShowerEnclosures.description'),
      image: 'https://images.pexels.com/photos/1571456/pexels-photo-1571456.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    },
    {
      title: t('servicesPage.services.fixedGlazing.title'),
      description: t('servicesPage.services.fixedGlazing.description'),
      image: 'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    },
  ];

  const handleImageClick = (imageSrc: string, title: string) => {
    setSelectedImage({ src: imageSrc, alt: title });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">{t('servicesPage.title')}</h2>
            <p className="text-xl text-gray-600">{t('servicesPage.subtitle')}</p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } items-center gap-12`}
              >
                <div className="lg:w-1/2">
                  <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                      onClick={() => handleImageClick(service.image, service.title)}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                  </div>
                </div>
                
                <div className="lg:w-1/2 space-y-6">
                  <h3 className="text-3xl font-bold text-black">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{service.description}</p>
                  <button className="bg-[#01ccff] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#00b8e6] transition-colors duration-200">
                    {t('servicesPage.requestQuote')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ImageModal
        isOpen={selectedImage !== null}
        onClose={closeModal}
        imageSrc={selectedImage?.src || ''}
        imageAlt={selectedImage?.alt || ''}
      />
    </>
  );
};

export default ServicesPage;