
import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/da3b47ed-5461-47fb-8651-0b733c887ecd.png" 
                alt="Pelican Creative" 
                className="h-10 w-auto mr-2"
              />
              <span className="text-xl font-display font-bold">Pelican</span>
            </div>
            <p className="text-gray-400 text-sm">
              Turning ideas into remarkable brands. We provide creative solutions that bring your vision to life.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Branding</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Website Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Graphic Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Video Production</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-gray-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-gray-400 mr-2 flex-shrink-0" />
                <span className="text-gray-400">+251 91 234 5678</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-gray-400 mr-2 flex-shrink-0" />
                <span className="text-gray-400">info@pelicancreative.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Pelican Creative. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
