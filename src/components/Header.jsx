import React, { useState, useEffect, useRef } from 'react';
import icon from '../assets/icon.png';
import { FaTrashAlt } from 'react-icons/fa';
import { RiResetLeftFill } from "react-icons/ri";
import { MdCancel } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";


function Header({ handleResetChats }) {
  const [showConfirm, setShowConfirm] = useState(false);
  const dialogRef = useRef(null);

  const handleConfirmReset = () => {
    handleResetChats();
    setShowConfirm(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showConfirm && dialogRef.current && !dialogRef.current.contains(event.target)) {
        setShowConfirm(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showConfirm]);

  return (
    <header className="relative py-4 bg-[#252525] ">
      <div className="flex justify-center items-center">
        <img src={icon} alt="App Icon" className="w-8" />
        <h1 className="text-xl ml-2 font-bold text-gradient">Promptly</h1>
      </div>
      <button 
        onClick={() => setShowConfirm(true)} 
        className="absolute top-1/2 transform -translate-y-1/2 right-4 sm:right-40 text-red-400 bg-gray-600 p-1 rounded-full"
        title='Reset Chat'
      >
              <RiResetLeftFill />
      </button>
      {showConfirm && (
        <div ref={dialogRef} className="confirmation-dialog absolute z-10 top-12 right-40 bg-[#2d2d2d] text-gray-300 p-4 rounded shadow-lg">
          <p>want to reset chats?</p>
          <div className="flex justify-end mt-2">
            <button 
              onClick={() => setShowConfirm(false)} 
              className="mr-2 px-2 py-1 bg-gray-600 rounded"
            >
                          <MdCancel />
            </button>
            <button 
              onClick={handleConfirmReset} 
              className="px-2 py-1 bg-red-600 rounded"
            >
                          <GiConfirmed />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;