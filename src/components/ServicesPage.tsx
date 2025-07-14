import React, { useState } from 'react';
import ImageModal from './ImageModal';

const ServicesPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const services = [
    {
      title: 'Glass Staircases',
      description: 'Transform your space with our elegant glass staircases that combine modern aesthetics with structural integrity. Our expert craftsmen create stunning focal points that allow light to flow freely throughout your home or office, making spaces feel larger and more open. Each staircase is custom-designed to meet your specific requirements while adhering to the highest safety standards.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    },
    {
      title: 'Curved Glass Staircases',
      description: 'Experience the pinnacle of architectural artistry with our curved glass staircases. These sophisticated installations serve as breathtaking centerpieces that seamlessly blend form and function. Our skilled team specializes in creating smooth, flowing curves that challenge traditional design boundaries while maintaining the highest levels of safety and durability.',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    },
    {
      title: 'Sliding Glass Doors',
      description: 'Maximize your connection to the outdoors with our premium sliding glass door systems. These installations create seamless transitions between indoor and outdoor living spaces while flooding your interior with natural light. Our doors feature advanced weatherproofing, energy-efficient glass, and smooth operation mechanisms for years of reliable performance.',
      image: 'https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    },
    {
      title: 'Office Glazing',
      description: 'Enhance your workplace environment with our professional office glazing solutions. We create modern, productive spaces that balance openness with privacy, using high-quality glass partitions and windows that provide sound control and visual appeal. Our installations help create collaborative environments while maintaining professional aesthetics.',
      image: 'https://images.pexels.com/photos/1571446/pexels-photo-1571446.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    },
    {
      title: 'Glass Ceilings',
      description: 'Revolutionize your space with our innovative glass ceiling installations that bring the sky indoors. These dramatic architectural features flood interiors with natural light while creating stunning visual impact. Our glass ceilings are engineered for safety and weather resistance, perfect for atriums, conservatories, and modern architectural designs.',
      image: 'https://images.pexels.com/photos/1571448/pexels-photo-1571448.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    },
    {
      title: 'Curved Balcony Glass',
      description: 'Enjoy unobstructed panoramic views with our custom curved balcony glass installations. These sophisticated systems provide essential safety barriers while maintaining visual continuity with your surroundings. Our curved glass solutions are engineered to withstand weather extremes while offering crystal-clear visibility and modern aesthetic appeal.',
      image: 'https://images.pexels.com/photos/1571451/pexels-photo-1571451.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    },
    {
      title: 'Glass Doors',
      description: 'Make a lasting impression with our premium glass door solutions designed for both residential and commercial applications. Our doors combine style, security, and energy efficiency, featuring tempered safety glass and robust hardware systems. From entrance doors to interior partitions, we create solutions that enhance your space\'s functionality and appeal.',
      image: 'https://images.pexels.com/photos/1571454/pexels-photo-1571454.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    },
    {
      title: 'Mirrors',
      description: 'Expand your space and enhance lighting with our custom mirror installations. From decorative accent pieces to functional wall mirrors and architectural mirror systems, we create solutions that transform interiors. Our mirrors are crafted from high-quality materials with precision cutting and professional installation for lasting beauty and functionality.',
      image: 'https://images.pexels.com/photos/1571455/pexels-photo-1571455.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    },
    {
      title: 'Glass Shower Enclosures',
      description: 'Transform your bathroom into a luxurious spa-like retreat with our custom glass shower enclosures. These installations feature seamless, easy-to-clean surfaces that resist water spots and soap buildup. Our enclosures are available in various configurations and glass types, all designed to provide years of beautiful, functional service.',
      image: 'https://images.pexels.com/photos/1571456/pexels-photo-1571456.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    },
    {
      title: 'Fixed Glazing',
      description: 'Achieve optimal insulation and visual appeal with our fixed glazing solutions for windows, facades, and architectural features. These permanent installations provide excellent thermal performance while creating clean, modern aesthetics. Our fixed glazing systems are engineered for longevity and weather resistance in any climate condition.',
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
            <h2 className="text-4xl font-bold text-black mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Professional glass solutions for every need</p>
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
                    Request Quote
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