// import React from "react";
// import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-gray-900 text-white">
//       <div className="max-w-7xl mx-auto px-5 py-12">
//         {/* Main Footer Content */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
//           {/* Company Info */}
//           <div className="space-y-4">
//             <h3 className="text-xl font-bold text-blue-400">AI ANJALI INFRA</h3>
//             <p className="text-gray-300 text-sm leading-relaxed">
//               Building tomorrow's infrastructure today. We specialize in innovative construction solutions and sustainable development projects.
//             </p>
//             {/* Social Media Links */}
//             <div className="flex space-x-4 pt-2">
//               <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
//                 <FaFacebookF size={18} />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
//                 <FaInstagram size={18} />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
//                 <FaLinkedin size={18} />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
//                 <FaTwitter size={18} />
//               </a>
//             </div>
//           </div>

//           {/* Contact Information */}
//           <div className="space-y-4">
//             <h4 className="text-lg font-semibold text-blue-400">Contact Info</h4>
            
//             {/* Address */}
//             <div className="flex items-start space-x-3">
//               <FaMapMarkerAlt className="text-blue-400 mt-1 flex-shrink-0" size={16} />
//               <div className="text-gray-300 text-sm">
//                 <p>D.No.47-11-1/11 ,2nd floor, Eswar Arcade, Dwarakanager</p>
//                 <p>Opp Sriram Finance, Visakhapatnam - 530016 
//                 </p>
//                 <p>India</p>
//               </div>
//             </div>

//             {/* Phone */}
//             <div className="flex items-center space-x-3">
//               <FaPhone className="text-blue-400 flex-shrink-0" size={16} />
//               <a href="tel:+911234567890" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm">
//                 +91 8099966699
//               </a>
//             </div>

//             {/* Email */}
//             <div className="flex items-center space-x-3">
//               <FaEnvelope className="text-blue-400 flex-shrink-0" size={16} />
//               <a href="mailto:info@aianjailiinfra.com" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm">
//                 info@aianjailiinfra.com
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div className="space-y-4">
//             <h4 className="text-lg font-semibold text-blue-400">Quick Links</h4>
//             <div className="flex flex-col space-y-2">
//               <a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm">
//                 Home
//               </a>
//               <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm">
//                 About Us
//               </a>
//               <a href="#gallery" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm">
//                 Gallery
//               </a>
//               <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm">
//                 Contact Us
//               </a>
//             </div>
//           </div>

//           {/* Services */}
//           <div className="space-y-4">
//             <h4 className="text-lg font-semibold text-blue-400">Our Services</h4>
//             <div className="flex flex-col space-y-2">
//               <span className="text-gray-300 text-sm">Construction</span>
//               <span className="text-gray-300 text-sm">Infrastructure Development</span>
//               <span className="text-gray-300 text-sm">Project Management</span>
//               <span className="text-gray-300 text-sm">Consulting</span>
//             </div>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="border-t border-gray-700 mt-8 pt-6">
//           {/* Copyright */}
//           <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//             <p className="text-gray-400 text-sm text-center md:text-left">
//               © {new Date().getFullYear()} AI Anjali Infra. All rights reserved.
//             </p>
//             <div className="flex space-x-6 text-sm">
//               <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
//                 Developed by Abinash Patri
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { MapPin, Mail, Phone, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/10 via-cyan-300/5 to-sky-200/10"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-300/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="relative max-w-7xl mx-auto px-5 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-cyan-300">Contact Info</h4>
            
            {/* Address */}
            <div className="flex items-start space-x-3">
              <MapPin className="text-cyan-300 mt-1 flex-shrink-0" size={16} />
              <div className="text-slate-200 text-sm">
                <p>D.No.47-11-1/11 ,2nd floor, Eswar Arcade, Dwarakanager</p>
                <p>Opp Sriram Finance, Visakhapatnam - 530016</p>
                <p>India</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-3">
              <Phone className="text-cyan-300 flex-shrink-0" size={16} />
              <a href="tel:+918099966699" className="text-slate-200 hover:text-cyan-300 transition-colors duration-200 text-sm">
                +91 8099966699
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-3">
              <Mail className="text-cyan-300 flex-shrink-0" size={16} />
              <a href="mailto:info@aianjailiinfra.com" className="text-slate-200 hover:text-cyan-300 transition-colors duration-200 text-sm">
                info@aianjailiinfra.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-cyan-300">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <a href="/" className="text-slate-200 hover:text-cyan-300 text-sm">Home</a>
              <a href="/strength" className="text-slate-200 hover:text-cyan-300 text-sm">Profile</a>
              <a href="/gallery" className="text-slate-200 hover:text-cyan-300 text-sm">Gallery</a>
              <a href="/project" className="text-slate-200 hover:text-cyan-300 text-sm">Project</a>
              <a href="/contact" className="text-slate-200 hover:text-cyan-300 text-sm">Contact Us</a>
            </div>
          </div>

          {/* Services Section - moved here */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-cyan-300">Our Services</h4>
            <div className="grid grid-cols-1 gap-2">
              <span className="text-slate-200 text-sm bg-slate-800/30 backdrop-blur-sm rounded-lg px-4 py-2 border border-slate-600/30">
                Construction
              </span>
              <span className="text-slate-200 text-sm bg-slate-800/30 backdrop-blur-sm rounded-lg px-4 py-2 border border-slate-600/30">
                Infrastructure Development
              </span>
              <span className="text-slate-200 text-sm bg-slate-800/30 backdrop-blur-sm rounded-lg px-4 py-2 border border-slate-600/30">
                Project Management
              </span>
              <span className="text-slate-200 text-sm bg-slate-800/30 backdrop-blur-sm rounded-lg px-4 py-2 border border-slate-600/30">
                Electrical Services
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700/50 mt-8 pt-6">
          {/* Copyright and Social Links */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-300 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Anjali Infra. All rights reserved.
            </p>
            
            {/* Social Media Links */}
            <div className="flex items-center space-x-6">
              <span className="text-slate-400 text-sm">Follow us:</span>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-cyan-300 transition-all duration-200 transform hover:scale-110">
                  <Facebook size={18} />
                </a>
                <a href="#" className="text-slate-400 hover:text-cyan-300 transition-all duration-200 transform hover:scale-110">
                  <Instagram size={18} />
                </a>
                <a href="#" className="text-slate-400 hover:text-cyan-300 transition-all duration-200 transform hover:scale-110">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="text-slate-400 hover:text-cyan-300 transition-all duration-200 transform hover:scale-110">
                  <Twitter size={18} />
                </a>
              </div>
            </div>

            {/* Developer Credit */}
            <div className="text-slate-400 text-sm">
              Developed by <span className="text-cyan-300 font-medium">Abinash Patri</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
