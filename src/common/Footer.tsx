import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-5 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-400">AI ANJALI INFRA</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Building tomorrow's infrastructure today. We specialize in innovative construction solutions and sustainable development projects.
            </p>
            {/* Social Media Links */}
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <FaLinkedin size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <FaTwitter size={18} />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-400">Contact Info</h4>
            
            {/* Address */}
            <div className="flex items-start space-x-3">
              <FaMapMarkerAlt className="text-blue-400 mt-1 flex-shrink-0" size={16} />
              <div className="text-gray-300 text-sm">
                <p>123 Infrastructure Lane</p>
                <p>Construction City, CC 12345</p>
                <p>India</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-3">
              <FaPhone className="text-blue-400 flex-shrink-0" size={16} />
              <a href="tel:+911234567890" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm">
                +91 123 456 7890
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-blue-400 flex-shrink-0" size={16} />
              <a href="mailto:info@aianjailiinfra.com" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm">
                info@aianjailiinfra.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-400">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm">
                Home
              </a>
              <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm">
                About Us
              </a>
              <a href="#gallery" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm">
                Gallery
              </a>
              <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm">
                Contact Us
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-400">Our Services</h4>
            <div className="flex flex-col space-y-2">
              <span className="text-gray-300 text-sm">Construction</span>
              <span className="text-gray-300 text-sm">Infrastructure Development</span>
              <span className="text-gray-300 text-sm">Project Management</span>
              <span className="text-gray-300 text-sm">Consulting</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} AI Anjali Infra. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;