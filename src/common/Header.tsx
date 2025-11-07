import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { logo3 } from "../assets/Image";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Detect scroll or cursor move (only for home page)
  useEffect(() => {
    if (location.pathname !== "/") {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleMouseMove = () => {
      setIsScrolled(true);
      window.removeEventListener("mousemove", handleMouseMove);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [location.pathname]);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
  }, [menuOpen]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 px-4 sm:px-6 transition-all duration-700 ease-in-out ${
          isScrolled
            ? "bg-gradient-to-b from-slate-900/90 via-slate-800/85 to-slate-700/75 backdrop-blur-md shadow-md"
            : "bg-transparent backdrop-blur-0 shadow-none"
        }`}
      >
        {/* Overlay */}
        {isScrolled && (
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-cyan-400/10 to-indigo-400/10 mix-blend-overlay pointer-events-none"></div>
        )}

        <div className="flex items-center justify-between w-full max-w-7xl mx-auto relative py-1 md:py-2">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img
              src={logo3}
              alt="Logo"
              className="h-12 sm:h-14 md:h-16 lg:h-[72px] w-auto object-contain transition-all duration-500"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex text-sm font-medium space-x-6">
            {[
              { to: "/", text: "HOME" },
              { to: "/strength", text: "PROFILE" },
              { to: "/project", text: "PROJECT" },
              { to: "/gallery", text: "GALLERY" },
              { to: "/contact", text: "CONTACT US" },
            ].map((link) => (
              <Link
                key={link.text}
                to={link.to}
                className={`relative pb-1 transition-all duration-300 ${
                  isActive(link.to)
                    ? "text-sky-300 font-semibold"
                    : "text-gray-300 hover:text-sky-300"
                }`}
              >
                {link.text}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-sky-400 to-blue-500 transition-all duration-300 ${
                    isActive(link.to)
                      ? "w-full"
                      : "group-hover:w-full hover:w-full"
                  }`}
                ></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-2xl z-50 relative p-2 rounded-full transition-all duration-300 hover:scale-110"
            >
              {menuOpen ? (
                <X className="text-sky-300" />
              ) : (
                <Menu className="text-sky-300" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-72 
          bg-gradient-to-b from-slate-900 via-slate-800 to-slate-700 
          bg-opacity-95 backdrop-blur-md 
          z-50 shadow-2xl md:hidden transform transition-transform duration-300 
          ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/20 relative">
          <h2 className="text-xl font-bold text-white">Menu</h2>
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 hover:bg-white/10 rounded-full text-white"
          >
            <X className="text-sky-300" />
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
              className={`block text-lg font-semibold py-2 transition-all duration-300 ${
                isActive(link.to)
                  ? "text-sky-300 border-l-4 border-sky-400 pl-3"
                  : "text-gray-300 hover:text-sky-300 hover:pl-3"
              }`}
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
