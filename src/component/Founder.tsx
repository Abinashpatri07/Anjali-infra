// const Founder = () => {
//   return (
//     <div className=" bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
//             Meet Our Founders
//           </h2>
//           <p className="mt-4 text-lg text-gray-600">
//             The visionaries behind our company
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//           {/* Founder Card 1 */}
//           <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
//             {/* Image Section */}
//             <div className="h-64 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
//               <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
//                 <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center">
//                   <span className="text-white text-2xl font-bold">JS</span>
//                 </div>
//               </div>
//             </div>
            
//             {/* Name Section */}
//             <div className="p-6 text-center">
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                 Niranjan Mishra
//               </h3>
//               <p className="text-gray-600 mb-4">Founder</p>
//               <p className="text-sm text-gray-500 leading-relaxed">
//                 Passionate about innovation and building products that make a difference in people's lives.
//               </p>
//             </div>
//           </div>

//           {/* Founder Card 2 */}
//           <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
//             {/* Image Section */}
//             <div className="h-64 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
//               <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
//                 <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center">
//                   <span className="text-white text-2xl font-bold">AD</span>
//                 </div>
//               </div>
//             </div>
            
//             {/* Name Section */}
//             <div className="p-6 text-center">
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                 Soumya Ranjan mishra
//               </h3>
//               <p className="text-gray-600 mb-4">Co-Founder</p>
//               <p className="text-sm text-gray-500 leading-relaxed">
//                 Technology enthusiast with a vision for creating scalable solutions and exceptional user experiences.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Founder;

import { founder1 } from "../assets/Image"; // Import your images

const Founder = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-br from-cyan-400/20 to-green-400/20 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-300/10 to-pink-300/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
             Meet Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Founders
              </span>
            </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            The visionaries behind our company, driving innovation and excellence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Founder Card 1 */}
          <div className="group relative">
            {/* Card Background with Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-white rounded-2xl p-1.5">
              <div className="bg-white rounded-xl overflow-hidden transform transition-all duration-500 group-hover:scale-[0.98]">
                {/* Image Section with Overlay */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-transparent to-purple-600/20"></div>
                  <img 
                    src={founder1} 
                    alt="Niranjan Mishra"
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Floating Decorative Elements */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-80 blur-sm"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-70 blur-sm"></div>
                </div>
                
                {/* Name Section with Enhanced Styling */}
                <div className="p-8 text-center relative">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-cyan-50/50"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-cyan-700 bg-clip-text text-transparent mb-3">
                      Niranjan Mishra
                    </h3>
                    <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-semibold rounded-full mb-4 shadow-lg">
                      Founder
                    </div>
                    <p className="text-gray-600 leading-relaxed text-base">
                      Passionate about innovation and building products that make a difference in people's lives.
                    </p>
                    
                    {/* Decorative Bottom Line */}
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-6 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Founder Card 2 */}
          <div className="group relative">
            {/* Card Background with Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-white rounded-2xl p-1.5">
              <div className="bg-white rounded-xl overflow-hidden transform transition-all duration-500 group-hover:scale-[0.98]">
                {/* Image Section with Overlay */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 via-transparent to-blue-600/20"></div>
                  <img 
                    src={founder1} 
                    alt="Soumya Ranjan Mishra"
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Floating Decorative Elements */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-green-400 to-blue-400 rounded-full opacity-80 blur-sm"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-70 blur-sm"></div>
                </div>
                
                {/* Name Section with Enhanced Styling */}
                <div className="p-8 text-center relative">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-transparent to-blue-50/50"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-green-700 to-blue-700 bg-clip-text text-transparent mb-3">
                      Soumya Ranjan Mishra
                    </h3>
                    <div className="inline-block px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white text-sm font-semibold rounded-full mb-4 shadow-lg">
                      Co-Founder
                    </div>
                    <p className="text-gray-600 leading-relaxed text-base">
                      Technology enthusiast with a vision for creating scalable solutions and exceptional user experiences.
                    </p>
                    
                    {/* Decorative Bottom Line */}
                    <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mt-6 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
