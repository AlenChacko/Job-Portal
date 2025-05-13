import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const { isSearched, setIsSearched, searchFilter, setSearchFilter, jobs } =
    useContext(AppContext);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);

const NoResult = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 border border-gray-200 rounded-lg py-16 px-6 text-center shadow-sm">
      <img
        src={assets.no_result} // ← Replace with an appropriate "no result" icon in your assets
        alt="No results"
        className="w-20 h-20 mb-6 opacity-70"
      />
      <h4 className="text-2xl font-semibold text-gray-700 mb-2">
        No results found
      </h4>
      <p className="text-gray-500 mb-4">
        Try adjusting your filters or search keywords.
      </p>
      <button
        onClick={() => {
          setSearchFilter({ title: "", location: "" });
          setSelectedCategories([]);
          setSelectedLocations([]);
        }}
        className="mt-4 px-5 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white font-medium transition"
      >
        Reset Filters
      </button>
    </div>
  );
};

export default NoResult;
