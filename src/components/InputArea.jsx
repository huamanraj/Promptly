import React from "react";

const InputArea = ({ input, setInput, handleInput, isLoading, handleSendMessage, outputType }) => {
    const handleKeyDown = (event) => {
        if (event.key === "Enter" && !isLoading && input.trim()) {
            handleSendMessage();
        }
    };

    return (
        <textarea
            value={input}
            placeholder={
                outputType === "text" ? "Ask Promptly" : "Describe the image you want to generate"
            }
            className="flex-1 bg-transparent border-none outline-none text-gray-200 placeholder-gray-400 resize-none min-h-[32px] sm:min-h-[40px] max-h-[200px] overflow-y-auto text-sm sm:text-base scrollbar-dark"
            rows={1}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            onInput={handleInput}
        />
    );
};

export default InputArea;
