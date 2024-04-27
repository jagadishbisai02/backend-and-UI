// SearchContext.js
import React, { useState, createContext } from "react";

// Create a Context
export const SearchContext = createContext();

// Create a Provider Component
const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (value) =>{
    setSearch(value)
  }

  return (
    <SearchContext.Provider value={{ search, handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
