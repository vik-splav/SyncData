import React from "react";
const Header: React.FC = () => {
  return (
        <div className="m-2 p-4 h-200 bg-white-100 flex justify-end items-center pr-4">
          <div className="m-4 p-4 h-300">
            <span className="m-2 p-2 text-indigo-800">
              Last sync: 5 min ago
            </span>
            <button className="m-2 p-2 bg-indigo-800 text-gray-100 font-bold px-8 py-4 rounded">
              Sync Now
            </button>
          </div>
        </div>
      );
};

export default Header;
