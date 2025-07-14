import React from 'react';
import { Instagram, Facebook, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">ArturoGlass</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Your trusted glass experts providing professional installation services for residential and commercial projects. From elegant staircases to modern office glazing, we bring your vision to life.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#01ccff] transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#01ccff] transition-colors duration-200">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-[#01ccff] transition-colors duration-200">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#01ccff] transition-colors duration-200">Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#01ccff] transition-colors duration-200">Portfolio</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#01ccff] transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-[#01ccff]" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-[#01ccff]" />
                <span className="text-gray-300">info@arturoglass.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} ArturoGlass Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;