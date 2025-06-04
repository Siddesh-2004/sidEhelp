import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

// Register user (with auto-login)

export const registerUser = createAsyncThunk(
    'auth/register',
    async (userData, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/register`, userData, {
                withCredentials: true
            });
            return response.data; // Just data, not data.loggedInUser
        } catch (error) {
            console.error('Registration error:', error);
            return rejectWithValue(error.response?.data?.message || 'Registration failed');
        }
    }
);

// Login user
export const loginUser = createAsyncThunk(
    'auth/login',
    async (loginData, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/login`, loginData, {
                withCredentials: true
            });
            return response.data;
        } catch (error) {
            console.error('Login error:', error);
            return rejectWithValue(error.response?.data?.message || 'Login failed');
        }
    }
);

// Logout user
export const logoutUser = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/logout`, {}, {
                withCredentials: true
            });
            console.log('Logout response:', response);
            return response.data; // Adjust based on your backend response structure
        } catch (error) {
            console.error('Logout error:', error);
            return rejectWithValue(error.response?.data?.message || 'Logout failed');
        }
    }
);
// Add this to your existing thunks in authSlice.js

// Check if user is still authenticated
export const checkAuthStatus = createAsyncThunk(
    'auth/checkStatus',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/me`, {}, {
                withCredentials: true
            });
            console.log('Auth checksfdsafdf response:', response.data);
            return response.data; // Adjust based on your backend response structure
        } catch (error) {
            console.error('Authentication check error:', error);
            return rejectWithValue(error.response?.data?.message || 'Authentication check failed');
        }
    }
);
const initialState = {
    status: false,
    userData: null,
    isLoading: false, // Add this for initialization loading
    isInitialized: false // Add this to track if app has checked auth
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state, action) {
            state.status = true;
            state.userData = action.payload;
        },
        logout(state) {
            state.status = false;
            state.userData = null;
        }
    },
    extraReducers: (builder) => {
    builder
        // Existing cases...
        .addCase(registerUser.fulfilled, (state, action) => {
            state.status = true;
            state.userData = action.payload;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.status = true;
            state.userData = action.payload;
        })
        .addCase(logoutUser.fulfilled, (state) => {
            state.status = false;
            state.userData = null;
        })
        // Add these new cases for auth check
        .addCase(checkAuthStatus.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(checkAuthStatus.fulfilled, (state, action) => {
            state.status = true;
            state.userData = action.payload;
            state.isLoading = false;
            state.isInitialized = true;
        })
        .addCase(checkAuthStatus.rejected, (state) => {
            state.status = false;
            state.userData = null;
            state.isLoading = false;
            state.isInitialized = true;
        })
}
})
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;





























// import { createSlice } from "@reduxjs/toolkit";
// const initialState={
//     status:false,
//     userData:null
// }
// const authSlice=createSlice({
//     name:"auth",
//     initialState,
//     reducers:{
//         login(state, action) {
//             state.status = true;
//             state.userData = action.payload;
//         },
//         logout(state) {
//             state.status = false;
//             state.userData = null;
//         }
//     }
// })
// export const { login, logout } = authSlice.actions;
// export default authSlice.reducer;