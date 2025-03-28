import React from "react";
import {
  Facebook,
  Instagram,
  Youtube,
  Music,
  TicketCheckIcon,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="w-full">
      <div
  className="text-white mt-40 py-3 px-6 flex flex-col md:flex-row justify-between items-center mx-auto"
  style={{
    backgroundColor: "#dd6527",
    width: "90%", 
    maxWidth: "800px", 
    borderRadius: "15px",
    position: "relative",
    marginBottom: "-25px",
  }}
>
  <h3
    className="text-lg md:text-xl font-extrabold mb-4 md:mb-0 text-white md:ml-5"
    style={{ letterSpacing: "-0.01em" }}
  >
    We're ready when you are
  </h3>
  <button
    className="contact-btn font-bold whitespace-nowrap" // Prevent text wrapping
    style={{
      backgroundColor: "#dd6527",
      color: "white",
      border: "3px solid white",
      borderRadius: "10px",
      padding: "0.5rem 1.5rem",
      fontSize: "0.9rem", 
      cursor: "pointer",
      transition: "all 0.3s ease",
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.backgroundColor = "white";
      e.currentTarget.style.color = "#dd6527";
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.backgroundColor = "#dd6527";
      e.currentTarget.style.color = "white";
    }}
  >
    Contact Us
  </button>
</div>

      {/* Main Footer */}
      <div
        className="w-full bg-pelicans-peach py-10 px-6"
        style={{ backgroundColor: "#faeae2" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4">
              <PelicansLogo />
            </div>
            <p className="text-sm font-semibold text-center md:text-left">
              Soar above the
              <br />
              COMPETITION
            </p>

            <div className="flex mt-4 space-x-2">
              <a href="#" className="social-icon" aria-label="Facebook">
                <div className="w-8 h-8 rounded-full bg-red-600 flex justify-center items-center">
                  <Facebook size={16} className="text-white" />
                </div>
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <div className="w-8 h-8 rounded-full bg-red-600 flex justify-center items-center">
                  <Instagram size={16} className="text-white" />
                </div>
              </a>
              <a href="#" className="social-icon" aria-label="Youtube">
                <div className="w-8 h-8 rounded-full bg-red-600 flex justify-center items-center">
                  <Youtube size={16} className="text-white" />
                </div>
              </a>
              <a href="#" className="social-icon" aria-label="TikTok">
                <div className="w-8 h-8 rounded-full bg-red-600 flex justify-center items-center">
                  <FontAwesomeIcon
                    icon={faTiktok}
                    size="lg"
                    className="text-white"
                  />
                </div>
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-medium mb-4">Useful Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="footer-link">
                  About US
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-medium mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="footer-link">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Parent Community
                </a>
              </li>
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
      <img
        src="/pelicans-logo.png"
        alt="Pelicans Logo"
        className="w-full h-full"
      />
    </div>
  );
};

export default Footer;
