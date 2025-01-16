import React from "react";
import icon from '../assets/icon.png'

const MessageItem = ({ message }) => {
    const isBot = message.sender !== "user";

    return (
        <div className={`flex w-full ${isBot ? "justify-start" : "justify-end"}`}>
            {isBot && (
                <div className="w-8 h-8  overflow-hidden mr-2 self-start mb-2">
                    <img
                        src={icon}
                        alt="Bot"
                        className="w-full h-full object-cover"
                    />
                </div>
            )}
            <div
                className={`relative px-4 py-2 m-1 max-w-xs md:max-w-sm rounded-2xl text-white ${isBot
                        ? ""
                    : "bg-[#2D2D2D] rounded-br-sm"
                    }`}
            >
                {message.type === "image" ? (
                    <img
                        src={message.text}
                        alt="Generated content"
                        style={{
                            width: "30vh",
                            height: "auto",
                            objectFit: "cover",
                            borderRadius: "0.5rem"
                        }}
                    />
                ) : (
                    <span className="text-sm">{message.text}</span>
                )}
            </div>
        </div>
    );
};

export default MessageItem;
