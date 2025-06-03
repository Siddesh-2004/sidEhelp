import React, { useState } from 'react';

export default function Login() {
  const [formData, setFormData] = useState({
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
    console.log('Login submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center align-middle pb-14">
      <div className="w-full max-w-lg">
        <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-black rounded-2xl shadow-lg border border-gray-700 overflow-hidden">
          {/* Form Section */}
          <div className="p-8">
            <h2 className="text-white text-2xl font-bold text-center mb-8">
              Welcome back
            </h2>

            <div className="space-y-6">
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

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-800 border-blue-600/40 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <span className="ml-2 text-sm text-gray-300">Remember me</span>
                </label>
                <a href="#" className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200">
                  Forgot password?
                </a>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 via-blue-700 to-black text-white font-bold rounded-lg shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
              >
                Log in
              </button>
            </div>

            <p className="text-gray-300 text-sm text-center mt-6">
              Don't have an account?{' '}
              <a href="#" className="text-blue-400 hover:text-blue-300 underline font-medium transition-colors duration-200">
                Sign up
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