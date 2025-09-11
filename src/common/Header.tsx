import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { logo3 } from "../assets/Image";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

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
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full z-50 px-5 
             bg-gradient-to-b from-slate-900 via-slate-800 to-slate-700 
             bg-opacity-95 backdrop-blur-md text-white"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-cyan-400/10 to-indigo-400/20 mix-blend-overlay"></div>

        <div className="flex items-center justify-between w-full max-w-7xl mx-auto relative">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={logo3}
              alt="Logo"
              className="h-8 sm:h-10 md:h-12 lg:h-16 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-5 text-sm font-medium ml-8">
            <Link to="/" className="hover:text-blue-400 transition-colors">
              HOME
            </Link>
            <Link to="/strength" className="hover:text-blue-400 transition-colors">
              PROFILE
            </Link>
            <Link to="/project" className="hover:text-blue-400 transition-colors">
              PROJECT
            </Link>
            <Link to="/gallery" className="hover:text-blue-400 transition-colors">
              GALLERY
            </Link>
            <Link to="/contact" className="hover:text-blue-400 transition-colors">
              CONTACT US
            </Link>
            {/* <Link to="/anjaliinfra/admin/dashboard" className="hover:text-blue-400 transition-colors">
              admin
            </Link> */}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-lg z-50 relative p-2 hover:bg-white rounded-full text-gray-300"
            >
              {menuOpen ? <X className="text-slate-800" /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden" />
      )}

      {/* Mobile Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-80 
              bg-gradient-to-b from-slate-900 via-slate-800 to-slate-700 
              bg-opacity-95 backdrop-blur-md 
              z-50 shadow-2xl md:hidden transform transition-transform duration-300 
              ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-cyan-400/10 to-indigo-400/20 mix-blend-overlay"></div>
        <div className="absolute top-0 left-0 w-40 h-40 bg-blue-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-indigo-400/30 rounded-full blur-2xl"></div>

        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/20 relative">
          <h2 className="text-xl font-bold text-white">Menu</h2>
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 hover:bg-white/10 rounded-full text-white"
          >
            <X className="text-lg" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="px-6 py-8 space-y-6 relative">
          {[
            { to: "/", text: "HOME" },
            { to: "/strength", text: "PROFILE" },
            { to: "/gallery", text: "GALLERY" },
            { to: "/project", text: "PROJECT" },
            { to: "/contact", text: "CONTACT US" },
          ].map((link) => (
            <Link
              key={link.text}
              to={link.to}
              className="block text-white text-lg font-semibold 
                   hover:text-cyan-300 py-3 px-4 rounded-lg 
                   hover:bg-white/10 border-l-4 border-transparent hover:border-cyan-400"
              onClick={() => setMenuOpen(false)}
            >
              {link.text}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;

