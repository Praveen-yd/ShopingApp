import React, { useState } from "react";
import "./searchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearchText } from "../redux/actions/productActions";
// import { searchInput } from "../../App";

function SearchBar() {
  const searchText = useSelector((state)=>state.allProducts.searchText)
  const dispatch = useDispatch();
  return (
    <div className="header__middleinput">
      <input 
        onChange={(e) => dispatch(setSearchText(e.target.value))}
        value={searchText}
        placeholder="Search"
        type="text"
        className="search-bar"
      />
    </div>
  );
}

export default SearchBar;
