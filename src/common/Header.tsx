import React, { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaBars, FaTimes } from "react-icons/fa";
import { logo2 } from "../assets/Image";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 px-5 transition-all duration-300 ${
        isScrolled ? "bg-black text-white shadow-lg py-3" : "bg-transparent text-white py-4"
      }`}
    >
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto relative">
        
        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-lg">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Left-side Navigation (Hidden on Mobile) */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#home" className="hover:text-blue-400 transition-colors duration-200">HOME</a>
          <a href="#gallery" className="hover:text-blue-400 transition-colors duration-200">GALLERY</a>
        </nav>

        {/* Logo (Always Centered) */}
        <div className="flex-shrink-0">
          <img 
          src={logo2} 
          alt="Logo" 
          className="h-8 sm:h-10 md:h-12 lg:h-16 w-auto object-contain"
        />

        </div>

        {/* Right-side Navigation (Hidden on Mobile) */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#contact" className="hover:text-blue-400 transition-colors duration-200">CONTACT US</a>
          <a href="#about" className="hover:text-blue-400 transition-colors duration-200">ABOUT</a>
        </nav>

        {/* Social Media Icons (Hidden on Mobile) */}
        <div className="hidden md:flex space-x-4 text-lg">
          <a href="#" className="hover:text-blue-400 transition-colors duration-200"><FaFacebookF /></a>
          <a href="#" className="hover:text-blue-400 transition-colors duration-200"><FaInstagram /></a>
          <a href="#" className="hover:text-blue-400 transition-colors duration-200"><FaLinkedin /></a>
          <a href="#" className="hover:text-blue-400 transition-colors duration-200"><FaTwitter /></a>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-black py-4 space-y-4 mt-2">
          <a href="#home" className="hover:text-blue-400 transition-colors duration-200" onClick={() => setMenuOpen(false)}>HOME</a>
          <a href="#gallery" className="hover:text-blue-400 transition-colors duration-200" onClick={() => setMenuOpen(false)}>GALLERY</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors duration-200" onClick={() => setMenuOpen(false)}>CONTACT US</a>
          <a href="#about" className="hover:text-blue-400 transition-colors duration-200" onClick={() => setMenuOpen(false)}>ABOUT</a>
          <div className="flex space-x-4 text-lg mt-4">
            <a href="#" className="hover:text-blue-400 transition-colors duration-200"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-200"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-200"><FaLinkedin /></a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-200"><FaTwitter /></a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;