// SearchBar.js

import React from 'react';
import './SearchBar.css';
import {FaSearch} from "react-icons/fa";

const SearchBar = () => {
    return (
        <div className="search-container">
              <span className="search-icon">
                <FaSearch />
              </span>
              <input type="text" placeholder="Αναζήτηση" className="search-input" />
        </div>
    );
};

export default SearchBar;