// src/features/chatSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    chats: [],
    activeChat: null,
    messages: [],
    loading: false,
    error: null,
};

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        fetchChatsStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchChatsSuccess: (state, action) => {
            state.chats = action.payload;
            state.loading = false;
        },
        fetchChatsFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        setActiveChat: (state, action) => {
            state.activeChat = action.payload;
        },
        fetchMessagesStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchMessagesSuccess: (state, action) => {
            state.messages = action.payload;
            state.loading = false;
        },
        fetchMessagesFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        sendMessageStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        sendMessageSuccess: (state, action) => {
            state.messages.push(action.payload);
            state.loading = false;
        },
        sendMessageFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

export const {
    fetchChatsStart,
    fetchChatsSuccess,
    fetchChatsFailure,
    setActiveChat,
    fetchMessagesStart,
    fetchMessagesSuccess,
    fetchMessagesFailure,
    sendMessageStart,
    sendMessageSuccess,
    sendMessageFailure,
} = chatSlice.actions;

export default chatSlice.reducer;