import React from "react";
import icon from '../assets/icon.png';
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const MessageItem = ({ message }) => {
    const isBot = message.sender !== "user";

    const copyToClipboard = (code) => {
        navigator.clipboard.writeText(code);
    };

    return (
        <div className={`flex w-full ${isBot ? "justify-start" : "justify-end"}`}>
            {isBot && (
                <div className="w-8 h-8 overflow-hidden mr-2 self-start mb-2 hidden sm:block">
                    <img
                        src={icon}
                        alt="Bot"
                        className="w-full h-full object-cover"
                    />
                </div>
            )}
            <div
                className={`relative px-4 py-2 m-1 max-w-xs md:max-w-sm rounded-2xl text-white ${isBot ? "" : "bg-[#2D2D2D] rounded-br-sm"
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
                    <ReactMarkdown
                        components={{
                            code({ node, inline, className, children, ...props }) {
                                const match = /language-(\w+)/.exec(className || '');
                                const code = String(children).replace(/\n$/, '');

                                return !inline && match ? (
                                    <div className="relative">
                                        <button
                                            onClick={() => copyToClipboard(code)}
                                            className="absolute right-2 top-2 bg-gray-600 hover:bg-gray-500 text-white px-2 py-1 rounded text-sm"
                                        >
                                            Copy
                                        </button>
                                        <SyntaxHighlighter
                                            style={materialDark}
                                            language={match[1]}
                                            PreTag="div"
                                            className="rounded-md"
                                            {...props}
                                        >
                                            {code}
                                        </SyntaxHighlighter>
                                    </div>
                                ) : (
                                    <code className={`${className} bg-gray-800 px-1 rounded`} {...props}>
                                        {children}
                                    </code>
                                );
                            },
                        }}
                    >
                        {message.text}
                    </ReactMarkdown>
                )}
            </div>
        </div>
    );
};

export default MessageItem;
