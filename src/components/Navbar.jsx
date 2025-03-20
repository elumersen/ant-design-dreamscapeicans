import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-lg shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <img
                src="/lovable-uploads/da3b47ed-5461-47fb-8651-0b733c887ecd.png"
                alt="Pelican Creative"
                className="h-10 w-auto"
              />
              <span className="text-xl font-display font-bold">Pelican</span>
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-sm font-medium text-gray-800 hover:text-brand-orange transition-colors"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-sm font-medium text-gray-800 hover:text-brand-orange transition-colors"
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="text-sm font-medium text-gray-800 hover:text-brand-orange transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium text-gray-800 hover:text-brand-orange transition-colors"
            >
              Pricing
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-sm font-medium">
              Login
            </Button>
            <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white">
              Get Started
            </Button>
          </div>

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
              href="#home"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#services"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Portfolio
            </a>
            <a
              href="#pricing"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <Button className="w-full justify-center bg-brand-orange hover:bg-brand-orange/90 text-white">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
