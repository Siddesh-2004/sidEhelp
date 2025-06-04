import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuthHook'; // Import the custom hook

export default function AuthPage({ setIsAuthenticated }) {
  const { handleLogin, handleRegister, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    let  checkResponse;
    try {
      if (isLogin) {
        // Login
        const loginData = {
          email: formData.email,
          password: formData.password
        };
        checkResponse = await handleLogin(loginData);
      } else {
        // Register - note the field name mapping
        const registerData = {
          userName: formData.username, // Backend expects 'userName'
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password
        };
        checkResponse = await handleRegister(registerData);
      }
      console.log('Auth response:', checkResponse);
      if( checkResponse.payload.statusCode === 200 || checkResponse.payload.success==true) {
        console.log('Auth successful:', checkResponse.payload);
      // Update parent component state if needed
      if (setIsAuthenticated) {
        setIsAuthenticated(true);
      }

      // Redirect after successful auth
      navigate('/'); // Replace with your desired route
    }else{
        console.error('Auth failed:', checkResponse.error);
        console.error('Error details:', checkResponse.error.message);
    }

    } catch (error) {
      // Error handling - you can make this more sophisticated
        console.error('Error during authentication:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({
      fullName: '',
      username: '',
      email: '',
      password: ''
    });
  };

  // If already authenticated, you might want to redirect or show different content
  // Uncomment if needed:
  // if (isAuthenticated) {
  //   navigate('/dashboard');
  //   return null;
  // }

  // Render the login/signup form
  return (
    <div className="min-h-screen bg-white flex items-center justify-center pb-14">
      <div className="w-full max-w-lg">
        <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-black rounded-2xl shadow-lg border border-gray-700 overflow-hidden">
          <div className="p-8">
            <h2 className="text-white text-2xl font-bold text-center mb-8">
              {isLogin ? 'Welcome back' : 'Create your account'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name - Only for signup */}
              {!isLogin && (
                <div className="transform transition-all duration-300 ease-in-out">
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
                    required={!isLogin}
                    disabled={isLoading}
                  />
                </div>
              )}

              {/* Username - Only for signup */}
              {!isLogin && (
                <div className="transform transition-all duration-300 ease-in-out">
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
                    required={!isLogin}
                    disabled={isLoading}
                  />
                </div>
              )}

              {/* Email */}
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
                  required
                  disabled={isLoading}
                />
              </div>

              {/* Password */}
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
                  required
                  disabled={isLoading}
                />
              </div>

              {/* Remember me & Forgot password - Only for login */}
              {isLogin && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-800 border-blue-600/40 rounded focus:ring-blue-500 focus:ring-2"
                      disabled={isLoading}
                    />
                    <span className="ml-2 text-sm text-gray-300">Remember me</span>
                  </label>
                  <a href="#" className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200">
                    Forgot password?
                  </a>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 via-blue-700 to-black text-white font-bold rounded-lg shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {isLogin ? 'Logging in...' : 'Signing up...'}
                  </span>
                ) : (
                  isLogin ? 'Log in' : 'Sign up'
                )}
              </button>
            </form>

            <p className="text-gray-300 text-sm text-center mt-6">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
              <button
                onClick={toggleForm}
                disabled={isLoading}
                className="text-blue-400 hover:text-blue-300 underline font-medium transition-colors duration-200 disabled:opacity-50"
              >
                {isLogin ? 'Sign up' : 'Log in'}
              </button>
            </p>
          </div>
        </div>

      
      </div>
    </div>
  );
}