import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, User, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content Container with sidebar spacing */}
      <div className="max-w-7xl mx-auto px-6 py-5">
        {/* Contact Section */}
        <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-black rounded-2xl shadow-lg p-4 mb-8 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative z-10">
             <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Contact US!!!
            </h2>
           {/* <p className="text-blue-100 text-center mb-12 max-w-3xl mx-auto">
              sidEhelp provides multiple ways to connect with our team. Whether you need support, have questions, or want to collaborate, we're here to help you succeed.
            </p> */}

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 group">
                      <div className="bg-blue-500/20 group-hover:bg-blue-500/30 p-3 rounded-lg transition-colors duration-300">
                        <Mail className="w-6 h-6 text-blue-300" />
                      </div>
                      <div>
                        <p className="text-blue-200 font-medium">Email</p>
                        <p className="text-white text-lg">siddeshpoojary2004@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 group">
                      <div className="bg-blue-500/20 group-hover:bg-blue-500/30 p-3 rounded-lg transition-colors duration-300">
                        <Phone className="w-6 h-6 text-blue-300" />
                      </div>
                      <div>
                        <p className="text-blue-200 font-medium">Phone</p>
                        <p className="text-white text-lg">+91 7676859564</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 group">
                      <div className="bg-blue-500/20 group-hover:bg-blue-500/30 p-3 rounded-lg transition-colors duration-300">
                        <MapPin className="w-6 h-6 text-blue-300" />
                      </div>
                      <div>
                        <p className="text-blue-200 font-medium">Address</p>
                        <p className="text-white text-lg">123 Academic Avenue<br />Education City, EC 12345</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl p-6 text-center text-white">
                    <div className="text-3xl font-bold mb-2">24/7</div>
                    <div className="text-blue-100">Support Available</div>
                  </div>
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl p-6 text-center text-white">
                    <div className="text-3xl font-bold mb-2">&lt;1hr</div>
                    <div className="text-purple-100">Response Time</div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <MessageCircle className="w-7 h-7 mr-3 text-blue-300" />
                  Send Message
                </h3>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-blue-300" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                      />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-blue-300" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                        className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                      />
                    </div>
                  </div>

                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                  />

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows="6"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 resize-none"
                  ></textarea>

                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
       
      </div>
    </div>
  );
};

export default Contact;