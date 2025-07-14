import React from 'react';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Glass Staircases',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    },
    {
      title: 'Curved Glass Staircases',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    },
    {
      title: 'Sliding Glass Doors',
      image: 'https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    },
    {
      title: 'Office Glazing',
      image: 'https://images.pexels.com/photos/1571446/pexels-photo-1571446.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    },
    {
      title: 'Glass Ceilings',
      image: 'https://images.pexels.com/photos/1571448/pexels-photo-1571448.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    },
    {
      title: 'Curved Balcony Glass',
      image: 'https://images.pexels.com/photos/1571451/pexels-photo-1571451.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    },
    {
      title: 'Glass Doors',
      image: 'https://images.pexels.com/photos/1571454/pexels-photo-1571454.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    },
    {
      title: 'Mirrors',
      image: 'https://images.pexels.com/photos/1571455/pexels-photo-1571455.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    },
    {
      title: 'Glass Shower Enclosures',
      image: 'https://images.pexels.com/photos/1571456/pexels-photo-1571456.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    },
    {
      title: 'Fixed Glazing',
      image: 'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Professional glass solutions for every need</p>
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
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm">Learn more</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;