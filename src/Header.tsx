import { useState } from 'react';
import { Menu, X, Building2 } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 p-2 rounded-lg shadow-md">
              <Building2 className="h-8 w-8 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">
                AI
              </span>
              <span className="text-xs text-gray-600 -mt-1">Anjali Infra</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="relative px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-700 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#gallery"
              className="relative px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 group"
            >
              Gallery
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-700 group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-1">
            <a
              href="#home"
              onClick={toggleMenu}
              className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg font-medium transition-all duration-200"
            >
              Home
            </a>
            <a
              href="#gallery"
              onClick={toggleMenu}
              className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg font-medium transition-all duration-200"
            >
              Gallery
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;