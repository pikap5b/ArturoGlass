import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ImageModal from './ImageModal';

interface ServicesProps {
  onNavigate?: (page: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const { t } = useLanguage();

  const services = [
    {
      title: 'Glass Staircases',
      description: 'Elegant and modern glass staircases that create an open, airy feel while maintaining structural integrity and safety standards.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    },
    {
      title: 'Curved Glass Staircases',
      description: 'Sophisticated curved glass staircases that serve as stunning architectural focal points, combining artistry with functionality.',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    },
    {
      title: 'Sliding Glass Doors',
      description: 'Seamless sliding glass door systems that maximize natural light and create smooth transitions between indoor and outdoor spaces.',
      image: 'https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    },
    {
      title: 'Office Glazing',
      description: 'Professional office glazing solutions that enhance workspace aesthetics while providing privacy and sound control.',
      image: 'https://images.pexels.com/photos/1571446/pexels-photo-1571446.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    },
    {
      title: 'Glass Ceilings',
      description: 'Innovative glass ceiling installations that flood spaces with natural light and create dramatic architectural statements.',
      image: 'https://images.pexels.com/photos/1571448/pexels-photo-1571448.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    },
    {
      title: 'Curved Balcony Glass',
      description: 'Custom curved balcony glass installations that provide unobstructed views while ensuring safety and weather protection.',
      image: 'https://images.pexels.com/photos/1571451/pexels-photo-1571451.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    },
    {
      title: 'Glass Doors',
      description: 'Premium glass door solutions for residential and commercial applications, offering style, security, and energy efficiency.',
      image: 'https://images.pexels.com/photos/1571454/pexels-photo-1571454.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    },
    {
      title: 'Mirrors',
      description: 'Custom mirror installations including decorative, functional, and architectural mirrors that enhance space and light.',
      image: 'https://images.pexels.com/photos/1571455/pexels-photo-1571455.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    },
    {
      title: 'Glass Shower Enclosures',
      description: 'Luxurious glass shower enclosures that transform bathrooms into spa-like retreats with seamless, easy-to-clean surfaces.',
      image: 'https://images.pexels.com/photos/1571456/pexels-photo-1571456.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    },
    {
      title: 'Fixed Glazing',
      description: 'Permanent glass installations for windows, facades, and architectural features that provide insulation and visual appeal.',
      image: 'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    },
  ];

  const handleImageClick = (imageSrc: string, title: string) => {
    setSelectedImage({ src: imageSrc, alt: title });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleGoToServices = () => {
    if (onNavigate) {
      onNavigate('services');
    }
  };

  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">{t('services.title')}</h2>
            <p className="text-xl text-gray-600">{t('services.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="aspect-w-16 aspect-h-12 relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                    onClick={() => handleImageClick(service.image, service.title)}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {onNavigate && (
            <div className="text-center mt-12">
              <button
                onClick={handleGoToServices}
                className="bg-[#01ccff] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#00b8e6] transition-colors duration-200 transform hover:scale-105"
              >
                {t('services.viewAll')}
              </button>
            </div>
          )}
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

export default Services;