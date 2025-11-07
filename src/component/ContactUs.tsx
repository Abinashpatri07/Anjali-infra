import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, User, MessageSquare, Hash } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactUs = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async() => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all fields');
      return;
    }
    
    setIsSubmitting(true);

    // /api/contact-us
    const response = await fetch('http://localhost:5000/api/contact-us',{
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    console.log(response);
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Our Address",
      details: [
        "D.No.47-11-1/11 ,2nd floor, Eswar Arcade, Dwarakanager",
        "Opp Sriram Finance, Visakhapatnam - 530016",
        "India"
      ],
      color: "blue"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: [
        "mishra.niranjan@anjaliinfra.in",
        
      ],
      color: "emerald"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: [
        "+91 80999 66699",
        
      ],
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: "bg-blue-500",
        text: "text-blue-600",
        border: "border-blue-200",
        shadow: "shadow-blue-200/50"
      },
      emerald: {
        bg: "bg-emerald-500",
        text: "text-emerald-600",
        border: "border-emerald-200",
        shadow: "shadow-emerald-200/50"
      },
      purple: {
        bg: "bg-purple-500",
        text: "text-purple-600",
        border: "border-purple-200",
        shadow: "shadow-purple-200/50"
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative py-12 px-6 text-center bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          {/* Main Title */}
          <div className="relative mb-6">
            <h1 className="text-4xl sm:text-5xl md:text-[6rem] lg:text-[8rem] font-black text-gray-100 leading-none tracking-tighter select-none">
              CONTACT
            </h1>

            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent tracking-[0.3em]">
                GET IN TOUCH
              </h2>
            </div>
          </div>

          {/* Subtitle */}
          <div className="space-y-2">
            <p className="text-lg md:text-xl text-gray-600 font-light tracking-wider">
              READY TO START YOUR PROJECT?
            </p>
            <p className="text-xl md:text-2xl text-gray-900 font-medium tracking-wide">
              Let's Build Something Amazing Together
            </p>
          </div>

          {/* Decorative elements */}
          <div className="mt-6 flex items-center justify-center space-x-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            <div className="flex space-x-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
            </div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent via-gray-300 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form - Left Side */}
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 tracking-wide">
                  Send Us a Message
                </h3>
                <p className="text-lg text-gray-600 tracking-wide">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <div className="space-y-5">
                {/* Name Field */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 tracking-wide">
                    FULL NAME
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-200">
                      <User size={20} />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-300 text-gray-900 placeholder-gray-400 shadow-sm focus:shadow-lg focus:shadow-blue-200/50"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 tracking-wide">
                    EMAIL ADDRESS
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-emerald-500 transition-colors duration-200">
                      <Mail size={20} />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none transition-all duration-300 text-gray-900 placeholder-gray-400 shadow-sm focus:shadow-lg focus:shadow-emerald-200/50"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 tracking-wide">
                    SUBJECT
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-purple-500 transition-colors duration-200">
                      <Hash size={20} />
                    </div>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition-all duration-300 text-gray-900 placeholder-gray-400 shadow-sm focus:shadow-lg focus:shadow-purple-200/50"
                      placeholder="What is this regarding?"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 tracking-wide">
                    MESSAGE
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-6 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-200">
                      <MessageSquare size={20} />
                    </div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-300 text-gray-900 placeholder-gray-400 shadow-sm focus:shadow-lg focus:shadow-blue-200/50 resize-vertical"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-8 rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-blue-200 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 disabled:opacity-70 disabled:cursor-not-allowed transform hover:scale-[1.02] group"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-lg tracking-wider">
                      {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                    </span>
                    <Send 
                      size={20} 
                      className={`transition-transform duration-300 group-hover:translate-x-1 ${
                        isSubmitting ? 'animate-pulse' : ''
                      }`} 
                    />
                  </div>
                </button>
              </div>
            </div>

            {/* Contact Information - Right Side */}
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 tracking-wide">
                  Contact Information
                </h3>
                <p className="text-lg text-gray-600 tracking-wide">
                  Reach out to us directly through any of the following channels.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const colorClasses = getColorClasses(info.color);
                  
                  return (
                    <div
                      key={index}
                      className={`bg-white border-2 ${colorClasses.border} rounded-2xl p-5 shadow-lg ${colorClasses.shadow} hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group`}
                      style={{
                        animationDelay: `${index * 200}ms`,
                        animation: 'slideInRight 0.8s ease-out forwards',
                        opacity: 0
                      }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 ${colorClasses.bg} text-white rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {info.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className={`text-xl font-bold ${colorClasses.text} mb-3 tracking-wide`}>
                            {info.title}
                          </h4>
                          <div className="space-y-2">
                            {info.details.map((detail, detailIndex) => (
                              <p key={detailIndex} className="text-gray-700 font-medium tracking-wide hover:text-gray-900 transition-colors duration-200">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ContactUs;