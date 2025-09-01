import { Link } from "react-router-dom";

import React, { useState, useEffect, useRef } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { logo2 } from "../assets/Image";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

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

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 px-5 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-900 text-white shadow-lg py-3"
            : "bg-transparent text-white py-4"
        }`}
      >
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto relative">
          {/* Logo (Left Side) */}
          <div className="flex-shrink-0">
            <img
              src={logo2}
              alt="Logo"
              className="h-8 sm:h-10 md:h-12 lg:h-16 w-auto object-contain"
            />
          </div>

          {/* Center Navigation (Hidden on Mobile) */}
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            <Link
              to="/"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              HOME
            </Link>
            <Link
              to="/strength"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              PROFILE
            </Link>
            <Link
              to="/project"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              PROJECT
            </Link>
            <Link
              to="/gallery"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              GALLERY
            </Link>
            {/* <Link
              to="/about"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              ABOUT
            </Link> */}
            <Link
              to="/contact"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              CONTACT US
            </Link>
          </nav>

          {/* Right Side - Social Media Icons & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Social Media Icons (Hidden on Mobile) */}
            <div className="hidden md:flex space-x-4 text-lg">
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                <FaTwitter />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-lg z-50 relative p-2 hover:bg-white/10 rounded-full transition-all duration-200"
            >
              {menuOpen ? <FaTimes className="text-white" /> : <FaBars />}
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-all duration-300 md:hidden" />
      )}

      {/* Mobile Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 z-50 transform transition-all duration-300 ease-in-out md:hidden shadow-2xl ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-700/50">
          <h2 className="text-xl font-bold text-white">Menu</h2>
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 hover:bg-white/10 rounded-full transition-all duration-200"
          >
            <FaTimes className="text-white text-lg" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="px-6 py-8 space-y-6">
          {[
            { to: "/", text: "HOME" },
            { to: "/strength", text: "PROFILE" },
            { to: "/gallery", text: "GALLERY" },
            { to: "/project", text: "PROJECT" },
            { to: "/contact", text: "CONTACT US" },
            // { to: "/about", text: "ABOUT" },
          ].map((link, index) => (
            <Link
              key={link.text}
              to={link.to}
              className="block text-white text-lg font-medium hover:text-blue-400 transform hover:translate-x-2 transition-all duration-300 py-3 px-4 rounded-lg hover:bg-white/5 border-l-4 border-transparent hover:border-blue-400"
              onClick={() => setMenuOpen(false)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {link.text}
            </Link>
          ))}
        </nav>

        {/* Social Media Section */}
        <div className="absolute bottom-8 left-0 right-0 px-6">
          <div className="border-t border-slate-700/50 pt-6">
            <h3 className="text-sm font-medium text-slate-400 mb-4 uppercase tracking-wider">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              {[
                { Icon: FaFacebookF, label: "Facebook" },
                { Icon: FaInstagram, label: "Instagram" },
                { Icon: FaLinkedin, label: "LinkedIn" },
                { Icon: FaTwitter, label: "Twitter" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="flex items-center justify-center w-12 h-12 bg-slate-700/50 hover:bg-blue-500 rounded-full text-white hover:scale-110 transform transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                  aria-label={label}
                >
                  <Icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-6 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-32 left-6 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"></div>
      </div>
    </>
  );
};

export default Header;
