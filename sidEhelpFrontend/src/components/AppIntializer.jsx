import React, { useEffect } from 'react';
import { useAuth } from '../hooks/useAuthHook';

const AppInitializer = ({ children ,isAuthenticated}) => {
    const { checkAuth, isLoading, isInitialized } = useAuth();

    useEffect(() => {
        // Check authentication status when app loads
        checkAuth();
    }, [isAuthenticated]);

    // Show loading spinner while checking authentication
    if (!isInitialized && isLoading) {
        return (
            <div className="min-h-screen bg-gray-900 flex items-center justify-center">
                <div className="text-white text-center">
                    <svg className="animate-spin -ml-1 mr-3 h-8 w-8 text-white mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <p>Loading...</p>
                </div>
            </div>
        );
    }

    // Once initialized, render the app
    return children;
};

export default AppInitializer;