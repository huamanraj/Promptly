// src/features/chatThunks.js
import { databases } from '../api/appwrite';
import { sendMessageToGPT } from '../api/gptApi';
import {
    fetchChatsStart,
    fetchChatsSuccess,
    fetchChatsFailure,
    fetchMessagesStart,
    fetchMessagesSuccess,
    fetchMessagesFailure,
    sendMessageStart,
    sendMessageSuccess,
    sendMessageFailure,
} from './chatSlice';

const DATABASE_ID = 'your_database_id';
const CHATS_COLLECTION_ID = 'chats';
const MESSAGES_COLLECTION_ID = 'messages';

// Fetch all chats for the logged-in user
export const fetchChats = (userId) => async (dispatch) => {
    dispatch(fetchChatsStart());
    try {
        const response = await databases.listDocuments(DATABASE_ID, CHATS_COLLECTION_ID, [
            `userId=${userId}`,
        ]);
        dispatch(fetchChatsSuccess(response.documents));
    } catch (error) {
        dispatch(fetchChatsFailure(error.message));
    }
};

// Fetch messages for a specific chat
export const fetchMessages = (chatId) => async (dispatch) => {
    dispatch(fetchMessagesStart());
    try {
        const response = await databases.listDocuments(DATABASE_ID, MESSAGES_COLLECTION_ID, [
            `chatId=${chatId}`,
        ]);
        dispatch(fetchMessagesSuccess(response.documents));
    } catch (error) {
        dispatch(fetchMessagesFailure(error.message));
    }
};

// Send a message (text or image)
export const sendMessage = (chatId, message, type = 'text') => async (dispatch) => {
    dispatch(sendMessageStart());
    try {
        // Save message to Appwrite
        const messageDoc = {
            chatId,
            type,
            content: message,
            sender: 'user',
            createdAt: new Date().toISOString(),
        };
        await databases.createDocument(DATABASE_ID, MESSAGES_COLLECTION_ID, 'unique_message_id', messageDoc);

        // Get GPT response for text messages
        if (type === 'text') {
            const gptResponse = await sendMessageToGPT(message);
            const gptMessageDoc = {
                chatId,
                type: 'text',
                content: gptResponse.choices[0].message.content,
                sender: 'bot',
                createdAt: new Date().toISOString(),
            };
            await databases.createDocument(DATABASE_ID, MESSAGES_COLLECTION_ID, 'unique_message_id', gptMessageDoc);
            dispatch(sendMessageSuccess(gptMessageDoc));
        }

        dispatch(sendMessageSuccess(messageDoc));
    } catch (error) {
        dispatch(sendMessageFailure(error.message));
    }
};