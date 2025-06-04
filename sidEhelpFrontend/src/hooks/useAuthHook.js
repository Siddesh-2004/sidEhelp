import { useSelector, useDispatch } from 'react-redux';
import { loginUser, registerUser, logoutUser, checkAuthStatus, login, logout } from '../features/authSlice';

export const useAuth = () => {
    const dispatch = useDispatch();
    const { status, userData, isLoading, isInitialized } = useSelector((state) => state.auth);

    // Existing methods...
    const handleLogin = async (loginData) => {
        try {
            const result = await dispatch(loginUser(loginData));
            return result;
        } catch (error) {
            console.error('Login failed:', error);
            throw error;
        }
    };

    const handleRegister = async (registerData) => {
        try {
            const result = await dispatch(registerUser(registerData));
            return result;
        } catch (error) {
            console.error('Registration failed:', error);
            throw error;
        }
    };

    const handleLogout = async () => {
        try {
            const result = await dispatch(logoutUser());
            dispatch(logout()); // Clear user data in state
            return result;
        } catch (error) {
            console.error('Logout failed:', error);
            throw error;
        }
    };

    // Add this new method
    const checkAuth = async () => {
        try {
            const result = await dispatch(checkAuthStatus());
            
            dispatch(login(result.data)); // Update user data in state
            return result;
        } catch (error) {
            console.error('Auth check failed:', error);
            throw error;
        }
    };

    const setLogin = (userData) => {
        dispatch(login(userData));
    };

    const setLogout = () => {
        dispatch(logout());
    };

    return {
        // State
        isAuthenticated: status,
        user: userData,
        isLoading,
        isInitialized,
        
        // Actions
        handleLogin,
        handleRegister,
        handleLogout,
        checkAuth, // Add this
        setLogin,
        setLogout
    };
};