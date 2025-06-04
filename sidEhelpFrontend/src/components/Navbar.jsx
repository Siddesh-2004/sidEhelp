import { useEffect } from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuth } from "../hooks/useAuthHook";
export default function Navbar({ isAuthenticated}) {
  const { handleLogout } = useAuth();
  // Move useSelector to the top level of the component
  const user = useSelector((state) => state.auth.userData);
  const [userData, setUserData] = useState(user);
  useEffect(() => {
    if(user){
      setUserData(user);
      console.log("User data from Navbar:", user);
    }
    
  }, [ user,isAuthenticated]); // Add user to dependencies
  
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b-2 border-solid border-b-blue-100 bg-white/80 backdrop-blur-sm px-10 py-4 shadow-sm">
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
        
        {/* Conditional rendering for Login/Logout button */}
        {userData ? (
          // Logout button when user is authenticated
          <button
            onClick={() => {
              handleLogout();
              setUserData(null); // Clear user data on logout
            }}

            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white text-sm font-bold leading-normal tracking-[0.015em] shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            <div className="flex items-center gap-2">
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
              <span className="truncate">Logout</span>
            </div>
          </button>
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