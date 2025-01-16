import React, { useState, useRef, useEffect } from "react";
import ChatInput from "./ChatInput";
import MessageList from "./MessageList";
import icon from "../assets/icon.png";
import Header from "./Header";

const ChatApp = () => {
  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem("chatMessages");
    return savedMessages ? JSON.parse(savedMessages) : [];
  });
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [outputType, setOutputType] = useState("text");
  const chatContainerRef = useRef(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const newMessage = { text: input, sender: "user", type: "text" };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    setIsLoading(true);
    let botResponse;
    try {
      const url =
        outputType === "text"
          ? `https://text.pollinations.ai/${input}`
          : `https://image.pollinations.ai/prompt/${input}`;
      const response = await fetch(url);
      if (outputType === "text") {
        const data = await response.text();
        botResponse = {
          text: data,
          sender: "bot",
          type: "text",
        };
      } else {
        botResponse = {
          text: url,
          sender: "bot",
          type: "image",
        };
      }
      console.log(botResponse);
    } catch (error) {
      botResponse = { text: error.toString(), sender: "bot", type: "text" };
      console.log(botResponse);
    }
    setMessages((prev) => [...prev, botResponse]);
    setIsLoading(false);
  };

  const handleResetChats = () => {
    setMessages([]);
    localStorage.removeItem("chatMessages");
  };

  return (
    <div className="flex flex-col h-screen bg-[#1E1E1E]">
      {/* Header */}
      <Header handleResetChats={handleResetChats} />

      {/* Messages */}
      <main ref={chatContainerRef} className="flex-1 px-4 sm:px-40  overflow-y-auto py-4">
        <MessageList messages={messages} isLoading={isLoading} />
      </main>

      {/* Input */}
      <footer className=" px-4 sm:px-40">
        <ChatInput
          handleSendMessage={handleSendMessage}
          input={input}
          setInput={setInput}
          isLoading={isLoading}
          outputType={outputType}
          setOutputType={setOutputType}
        />
        <div>
          <p className="text-center text-gray-600 py-2 text-[10px]"> Powered by Prompty © {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
};

export default ChatApp;
