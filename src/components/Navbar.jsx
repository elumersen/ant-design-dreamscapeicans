import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ContactUs from "./ui/contact_us";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () =>
  {
    setIsModalOpen(!isModalOpen);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all z-50 duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-lg shadow-sm py-3"
          : "bg-white py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img
                src="/pelicans-logo.png"
                alt="Pelicans Production"
                className="h-14 w-auto"
              />
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-10">
            <a
              href="/aboutUs"
              className="text-base font-medium text-gray-800 hover:text-[#E86B35] transition-colors"
            >
              About
            </a>
            <a
              href="/service"
              className="text-base font-medium text-gray-800 hover:text-[#E86B35] transition-colors"
            >
              Services
            </a>
            <a
              href="#pricing"
              className="text-base font-medium text-gray-800 hover:text-[#E86B35] transition-colors"
            >
              Pricing
            </a>
            <a
              href="#blog"
              className="text-base font-medium text-gray-800 hover:text-[#E86B35] transition-colors"
            >
              Blog
            </a>
            <Button className="bg-[#E86B35] hover:bg-[#E86B35]/90 text-white px-6 py-2 rounded-md" onClick={openModal}>
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md animate-fade-in">
          <div className="px-4 py-3 space-y-1">
            <a
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#services"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#pricing"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#blog"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </a>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <Button className="w-full justify-center bg-[#E86B35] hover:bg-[#E86B35]/90 text-white" onClick={openModal}>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
      <div className="text-center">
      <ContactUs isModalOpen={isModalOpen} setModalOpen={openModal}/>

      </div>

    </header>
  
  );
};

export default Navbar;
