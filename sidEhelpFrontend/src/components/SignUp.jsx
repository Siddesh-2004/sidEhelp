import React, { useState } from 'react';

export default function SignUp() {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center pb-14
    ">
    
      <div className="w-full max-w-lg">
        <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-black rounded-2xl shadow-lg border border-gray-700 overflow-hidden">
          {/* Form Section */}
          <div className="p-8">
            <h2 className="text-white text-2xl font-bold text-center mb-8">
              Create your account
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/70 border border-blue-600/40 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder="Choose a username"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/70 border border-blue-600/40 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/70 border border-blue-600/40 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/70 border border-blue-600/40 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 via-blue-700 to-black text-white font-bold rounded-lg shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
              >
                Sign up
              </button>
            </div>

            <p className="text-gray-300 text-sm text-center mt-6">
              Already have an account?{' '}
              <a href="#" className="text-blue-400 hover:text-blue-300 underline font-medium transition-colors duration-300">
                Log in
              </a>
            </p>
          </div>
        </div>

        {/* Floating Elements for Extra Visual Interest */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gray-600/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-0 w-16 h-16 bg-blue-300/20 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>
    </div>
  );
}