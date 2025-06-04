import React from 'react';
import { LogOut, X } from 'lucide-react';

const Profile = ({ 
  brandName = "sidEhelp",
  userName = "User",
  userEmail = "user@example.com",
  userInitial = "U",
  onClose,
  onSignOut
}) => {
  return (
    <div className="w-80 bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white rounded-2xl shadow-2xl overflow-hidden font-inter">
      {/* Header with sidEhelp logo and close button */}
      <div className="flex items-center justify-between p-6 pb-4">
        <div className="flex-1 text-center text-white text-2xl font-semibold tracking-wide">{brandName}</div>
        <button 
          className="text-blue-300 hover:text-blue-100 transition-colors"
          onClick={onClose}
        >
          <X size={24} />
        </button>
      </div>
      
      {/* Profile Section */}
      <div className="px-6 pb-6">
        <div className="flex items-center gap-4 mb-6">
          {/* Profile Avatar */}
          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white text-lg font-medium shadow-lg">
            {userInitial}
          </div>
          <div>
            <div className="text-white text-lg font-semibold">{userName}</div>
            <div className="text-blue-100 text-sm">{userEmail}</div>
          </div>
        </div>
        
        {/* Menu Items */}
        <div className="space-y-3">
          <button 
            className="w-full flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-gray-800/50 via-blue-800/30 to-gray-800/50 hover:from-gray-700/60 hover:via-blue-700/40 hover:to-gray-700/60 rounded-full transition-all duration-200 text-left backdrop-blur-sm"
            onClick={onSignOut}
          >
            <LogOut size={20} className="text-blue-200" />
            <span className="text-white font-semibold">Sign out</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;