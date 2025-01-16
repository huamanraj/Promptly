import React, { useState, useEffect } from "react";

const Dropdown = ({ outputType, setOutputType }) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const selectOutputType = (type) => {
        setOutputType(type);
        setShowDropdown(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (showDropdown && !event.target.closest(".dropdown-container")) {
                setShowDropdown(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [showDropdown]);

    return (
        <div className="relative dropdown-container">
            <button
                onClick={toggleDropdown}
                className="p-1.5 sm:p-2 hover:bg-[#404040] rounded-full transition-colors"
            >
                {outputType === "text" ? (
                    <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                ) : (
                    <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                    </svg>
                )}
            </button>
            {showDropdown && (
                <div className="absolute bottom-full left-0 w-42 bg-[#2D2D2D] rounded-lg shadow-xl z-50 p-2 transform -translate-y-2">
                    <p className="text-gray-400 text-sm text-center pb-2">Response</p>
                    <div className="flex flex-col gap-1">
                        <button
                            onClick={() => selectOutputType("text")}
                            className="flex items-center px-4 py-2 text-gray-200 bg-[#404040] hover:bg-[#505050] rounded-md text-sm sm:text-base transition-all"
                        >
                            Text
                        </button>
                        <button
                            onClick={() => selectOutputType("image")}
                            className="flex items-center px-4 py-2 text-gray-200 bg-[#404040] hover:bg-[#505050] rounded-md text-sm sm:text-base transition-all"
                        >
                            Image
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
