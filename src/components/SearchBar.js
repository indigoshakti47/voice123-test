import React from "react";
import { FaSearch } from 'react-icons/fa';

export default function SearchBar({ value, onChange, onSearch }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") onSearch();
  };

  return (
    <div className="pt-2 relative mx-auto text-gray-600 mt-5">
      <input
        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-full"
        type="search"
        name="search"
        placeholder="Search"
        onChange={onChange}
        value={value}
        onKeyDown={handleKeyDown}
      />
      <button
        type="submit"
        className="absolute right-0 top-0 mt-5 mr-4"
        onClick={onSearch}
      >
        <FaSearch className="text-gray-600 h-4 w-4 fill-current" />
      </button>
    </div>
  );
}
