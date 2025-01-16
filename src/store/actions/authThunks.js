// src/features/authThunks.js
import { account } from '../api/appwrite';
import { loginStart, loginSuccess, loginFailure, logout } from './authSlice';

export const loginUser = (email, password) => async (dispatch) => {
    dispatch(loginStart());
    try {
        const user = await account.createEmailSession(email, password);
        dispatch(loginSuccess(user));
    } catch (error) {
        dispatch(loginFailure(error.message));
    }
};

export const logoutUser = () => async (dispatch) => {
    try {
        await account.deleteSession('current');
        dispatch(logout());
    } catch (error) {
        console.error('Logout failed:', error);
    }
};