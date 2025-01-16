import React from "react";

const SendButton = ({ input, handleSendMessage }) => {
    return (
        <button
            onClick={() => input.trim() && handleSendMessage()}
            className="p-1.5 sm:p-2 hover:bg-[#404040] rounded-full transition-colors flex-shrink-0"
        >
            <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
        </button>
    );
};

export default SendButton;
