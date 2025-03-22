import React from "react";
import { Facebook, Instagram, Youtube, Music } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full">
      {/* Top Banner */}
      <div className="w-full bg-pelicans-orange text-white py-4 px-6 flex flex-col md:flex-row justify-between items-center">
        <h3 className="text-xl font-medium mb-4 md:mb-0">We're ready when you are</h3>
        <button className="contact-btn">Contact Us</button>
      </div>
      
      {/* Main Footer */}
      <div className="w-full bg-pelicans-peach py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4">
              <PelicansLogo />
            </div>
            <p className="text-sm font-semibold text-center md:text-left">
              Soar above the<br />
              COMPETITION
            </p>
            
            <div className="flex mt-4 space-x-2">
              <a href="#" className="social-icon" aria-label="Facebook">
                <Facebook size={16} />
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href="#" className="social-icon" aria-label="Youtube">
                <Youtube size={16} />
              </a>
              <a href="#" className="social-icon" aria-label="TikTok">
                <Music size={16} />
              </a>
            </div>
          </div>
          
          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-medium mb-4">Useful Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="footer-link">About US</a></li>
              <li><a href="#" className="footer-link">Services</a></li>
              <li><a href="#" className="footer-link">Pricing</a></li>
              <li><a href="#" className="footer-link">Blog</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="text-lg font-medium mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="footer-link">Help Center</a></li>
              <li><a href="#" className="footer-link">Contact Us</a></li>
              <li><a href="#" className="footer-link">Parent Community</a></li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-medium mb-4">Contact Information</h4>
            <p className="text-sm mb-2">Feel free to contact and reach us</p>
            <p className="text-sm mb-1">+251 94 433 6232</p>
            <p className="text-sm mb-4">+251 94 433 6232</p>
            <p className="text-sm">pelicansproduction9@gmail.com</p>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="max-w-6xl mx-auto mt-10 text-center">
          <p className="text-sm text-gray-600">© 2024. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Pelicans Logo Component
const PelicansLogo = () => {
  return (
    <div className="w-24 h-24 relative">
      <img src="/pelicans-logo.png" alt="Pelicans Logo" className="w-full h-full" />
      {/* <svg viewBox="0 0 120 120" className="w-full h-full">
        <path 
          d="M60 10 C30 10, 10 30, 10 60 C10 90, 30 110, 60 110 C90 110, 110 90, 110 60 C110 30, 90 10, 60 10" 
          fill="#2D99CC"
        />
        <path 
          d="M70 40 C80 35, 90 45, 85 55 C75 70, 60 75, 45 70 C40 65, 45 55, 55 60 C65 65, 75 60, 70 40" 
          fill="#FDBD3E"
        />
        <path 
          d="M75 50 C85 45, 90 55, 85 65 C80 75, 65 80, 55 75 C45 70, 50 60, 60 65 C70 70, 80 65, 75 50" 
          fill="#E06519"
        />
      </svg> */}
    </div>
  );
};

export default Footer;
