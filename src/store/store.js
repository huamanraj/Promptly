// src/features/store.js
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import authReducer from './authSlice';
import chatReducer from './chatSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        chat: chatReducer,
    },
    middleware: [thunk],
});

export default store;