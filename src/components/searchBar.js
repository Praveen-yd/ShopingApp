import React from "react";
// import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
// import { searchInput } from "../../App";

function SearchBar({ inputSearch, setInputSearch }) {
  return (
    <div className="header__middleinput">
      <input
        onChange={(e) => setInputSearch(e.target.value)}
        value={inputSearch}
        placeholder="Search"
        type="text"
        className="header__input"
      />
    </div>
  );
}

export default SearchBar;
