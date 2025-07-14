import React from 'react';
import { Phone, Mail, Instagram, Facebook, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@arturoglass.com', 'quotes@arturoglass.com'],
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['123 Glass Street', 'Professional District, City 12345'],
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon-Fri: 8:00 AM - 6:00 PM', 'Sat: 9:00 AM - 4:00 PM'],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600">Ready to bring your glass vision to life? Contact us today</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#01ccff] rounded-lg flex items-center justify-center">
                  <info.icon size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">{info.title}</h3>
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600">{detail}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Social Media */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#01ccff] rounded-lg flex items-center justify-center">
                <Instagram size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black mb-2">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-[#01ccff] transition-colors duration-200">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-[#01ccff] transition-colors duration-200">
                    <Facebook size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-black mb-6">Request a Quote</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#01ccff] focus:border-transparent"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#01ccff] focus:border-transparent"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#01ccff] focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#01ccff] focus:border-transparent"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Needed
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#01ccff] focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="glass-staircase">Glass Staircase</option>
                  <option value="curved-glass-staircase">Curved Glass Staircase</option>
                  <option value="sliding-glass-doors">Sliding Glass Doors</option>
                  <option value="office-glazing">Office Glazing</option>
                  <option value="glass-ceilings">Glass Ceilings</option>
                  <option value="curved-balcony-glass">Curved Balcony Glass</option>
                  <option value="glass-doors">Glass Doors</option>
                  <option value="mirrors">Mirrors</option>
                  <option value="glass-shower-enclosures">Glass Shower Enclosures</option>
                  <option value="fixed-glazing">Fixed Glazing</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#01ccff] focus:border-transparent"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#01ccff] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#00b8e6] transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;