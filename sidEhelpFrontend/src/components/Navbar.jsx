import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuth } from "../hooks/useAuthHook";

// Profile Component
const Profile = ({
  brandName = "sidEhelp",
  userName = "User",
  userEmail = "user@example.com",
  userInitial = "U",
  onClose,
  onSignOut
}) => {
  return (
    <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-lg border shadow-lg z-[9999]">
      {/* Header with sidEhelp logo and close button */}
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-lg font-bold text-[#101518]">{brandName}</h2>
        <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
          </svg>
        </button>
      </div>

      {/* Profile Section */}
      <div className="p-4">
        <div className="flex items-center gap-3 mb-4">
          {/* Profile Avatar */}
          <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
            {userInitial}
          </div>
          <div>
            <div className="font-semibold text-[#101518]">{userName}</div>
            <div className="text-sm text-gray-600">{userEmail}</div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="space-y-2">
          <button
            onClick={onSignOut}
            className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-50 rounded-lg transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
              <path d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
            </svg>
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Navbar({ isAuthenticated }) {
  const { handleLogout } = useAuth();
  const user = useSelector((state) => state.auth.userData);
  const [userData, setUserData] = useState(user);
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    if (user) {
      setUserData(user);
      console.log("User data from Navbar:", user);
    }
  }, [user, isAuthenticated]);

  const handleSignOut = () => {
    handleLogout();
    setUserData(null);
    setShowProfile(false);
  };

  // Get user initial from name or email
  const getUserInitial = () => {
    if (userData?.userName) {
      console.log("User name:", userData);
      return userData.userName.charAt(0).toUpperCase();
    }
    if (userData?.email) {
      return userData.email.charAt(0).toUpperCase();
    }
    return 'U';
  };

  return (
    <header className="relative flex items-center justify-between whitespace-nowrap border-b-2 border-solid border-b-blue-100 bg-white/80 backdrop-blur-sm px-10 py-4 shadow-sm z-[9997]">
      <div className="flex items-center gap-4 text-[#101518]">
        <div className="size-4 p-1 bg-blue-100 rounded-full">
          <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_6_319)">
              <path
                d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0_6_319">
                <rect width="48" height="48" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <h2 className="text-[#101518] text-lg font-bold leading-tight tracking-[-0.015em]">
          𝙨𝙞𝙙𝙀𝙝𝙚𝙡𝙥
        </h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-[#101518] text-sm font-medium leading-normal pb-1 transition-all duration-200 ${
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "hover:text-blue-600 hover:border-b-2 hover:border-blue-600"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/generate-documents"
            className={({ isActive }) =>
              `text-[#101518] text-sm font-medium leading-normal pb-1 transition-all duration-200 ${
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "hover:text-blue-600 hover:border-b-2 hover:border-blue-600"
              }`
            }
          >
            Generate Docs
          </NavLink>
          <NavLink
            to="/vocabulary-builder"
            className={({ isActive }) =>
              `text-[#101518] text-sm font-medium leading-normal pb-1 transition-all duration-200 ${
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "hover:text-blue-600 hover:border-b-2 hover:border-blue-600"
              }`
            }
          >
            Build Vocabulary
          </NavLink>
          <NavLink
            to="/search-books"
            className={({ isActive }) =>
              `text-[#101518] text-sm font-medium leading-normal pb-1 transition-all duration-200 ${
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "hover:text-blue-600 hover:border-b-2 hover:border-blue-600"
              }`
            }
          >
            Search Books
          </NavLink>
          <NavLink
            to="/study-planner"
            className={({ isActive }) =>
              `text-[#101518] text-sm font-medium leading-normal pb-1 transition-all duration-200 ${
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "hover:text-blue-600 hover:border-b-2 hover:border-blue-600"
              }`
            }
          >
            Study Planner
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-[#101518] text-sm font-medium leading-normal pb-1 transition-all duration-200 ${
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "hover:text-blue-600 hover:border-b-2 hover:border-blue-600"
              }`
            }
          >
            Contact
          </NavLink>
        </div>
        
        {/* Conditional rendering for Profile/Login button */}
        {userData ? (
          // Profile button when user is authenticated
          <div className="relative z-[9998]">
            <button
              onMouseEnter={() => setShowProfile(true)}
              onMouseLeave={() => setShowProfile(false)}
              className="flex items-center gap-2 h-10 px-4 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-xs font-bold">
                {getUserInitial()}
              </div>
              <span className="text-sm font-medium truncate max-w-24">
                {userData.name || userData.email?.split('@')[0] || 'User'}
              </span>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="ml-1"
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
              </svg> */}
            </button>

            {/* Profile Dropdown */}
            {showProfile && (
              <div
                onMouseEnter={() => setShowProfile(true)}
                onMouseLeave={() => setShowProfile(false)}
              >
                <Profile
                  brandName="𝙨𝙞𝙙𝙀𝙝𝙚𝙡𝙥"
                  userName={userData.name || 'User'}
                  userEmail={userData.email || 'user@example.com'}
                  userInitial={getUserInitial()}
                  onClose={() => setShowProfile(false)}
                  onSignOut={handleSignOut}
                />
              </div>
            )}
          </div>
        ) : (
          // Login button when user is not authenticated
          <Link
            to="/login"
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white text-sm font-bold leading-normal tracking-[0.015em] shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
                <path d="m11.354 8.354-2.5 2.5a.5.5 0 0 1-.708-.708L10.293 8H1.5a.5.5 0 0 1 0-1h8.793L8.146 5.854a.5.5 0 1 1 .708-.708l2.5 2.5a.5.5 0 0 1 0 .708z"/>
              </svg>
              <span className="truncate">Login</span>
            </div>
          </Link>
        )}
      </div>
    </header>
  );
}